const stringDecoder = require("./first")
const phone = require("./second")
const { phoneBook } = require("./second/constant")

console.log("stringDecoder", stringDecoder("WUBAWUBBWUBCWUB"))
console.log("phone", phone(phoneBook, "1-908-512-2222"))
