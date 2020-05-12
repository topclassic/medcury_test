const phone = require("../second")
const { phoneBook } = require("./constant")

describe("Test phone", () => {
  test("48-421-674-8974", () => {
    expect(phone(phoneBook, "48-421-674-8974")).toBe(
      "Phone => 48-421-674-8974, Name => Anastasia, Address => Via Quirinal Roma"
    )
  })

  test("1-921-512-2222", () => {
    expect(phone(phoneBook, "1-921-512-2222")).toBe(
      "Phone => 1-921-512-2222, Name => Wilfrid Stevens, Address => Wild Street AA-67209"
    )
  })

  test("1-908-512-2222", () => {
    expect(phone(phoneBook, "1-908-512-2222")).toBe(
      "Phone => 1-908-512-2222, Name => Peter O'Brien, Address => High Street CC-47209"
    )
  })

  test("1-541-754-3010", () => {
    expect(phone(phoneBook, "1-541-754-3010")).toBe(
      "Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St."
    )
  })

  test("1-121-504-8974", () => {
    expect(phone(phoneBook, "1-121-504-8974")).toBe(
      "Phone => 1-121-504-8974, Name => Arthur Clarke, Address => San Antonio TT-45120"
    )
  })

  test("1-498-512-2222", () => {
    expect(phone(phoneBook, "1-498-512-2222")).toBe(
      "Phone => 1-498-512-2222, Name => Bernard Deltheil, Address => Mount Av. Eldorado"
    )
  })

  test("1-098-512-2222", () => {
    expect(phone(phoneBook, "1-098-512-2222")).toBe(
      "Error => Too many people: 1-098-512-2222"
    )
  })

  test("5-555-555-5555", () => {
    expect(phone(phoneBook, "5-555-555-5555")).toBe(
      "Error => Not found: 5-555-555-5555"
    )
  })
})
