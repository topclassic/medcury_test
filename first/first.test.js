const stringDecoder = require("../first")

describe("Test stringDecoder", () => {
  test("AWUBBWUBC", () => {
    expect(stringDecoder("AWUBBWUBC")).toBe(
      "A B C",
      "WUB should be replaced by 1 space"
    )
  })
  test("AWUBWUBWUBBWUBWUBWUBC", () => {
    expect(stringDecoder("AWUBWUBWUBBWUBWUBWUBC")).toBe(
      "A B C",
      "multiples WUB should be replaced by only 1 space"
    )
  })
  test("WUBAWUBBWUBCWUB", () => {
    expect(stringDecoder("WUBAWUBBWUBCWUB")).toBe(
      "A B C",
      "heading or trailing spaces should be removed"
    )
  })
})
