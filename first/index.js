stringDecoder = (str) => str.split("WUB").join(" ").replace(/\s+/g, " ").trim()
module.exports = stringDecoder
