# MEDCURY TEST PROJECT

base on nodejs

## Installation

```bash
npm install
```

## Run Test case

```bash
npm run test
```

## First test

```javascript
stringDecoder = (str) => str.split("WUB").join(" ").replace(/\s+/g, " ").trim()
module.exports = stringDecoder

```

## Second test

```javascript
phone = (phoneBook, numStr) => {
  const formatNumStr = numStr.charAt(0) === "+" ? numStr : "+" + numStr
  const phone = phoneBook.match(
    /(\+([0-9]?[0-9])\-){1}(([0-9]?[0-9][0-9]?)\-){2}([0-9]?[0-9][0-9][0-9])/g
  )
  const filter = phone.filter((p) => p === formatNumStr)

  if (filter.length === 0) return `Error => Not found: ${numStr}`
  if (filter.length > 1) return `Error => Too many people: ${numStr}`

  const myPhoneBook = phoneBook
    .split("\n")
    .find((p) => p.includes(formatNumStr))
  const name = myPhoneBook.match(/\<(.*?)\>/g)
  if (name.length === 0) return `Error => Not Name`

  let address = myPhoneBook
  const filterAddress = [name, formatNumStr, "_", /[^\w-. ']/g, /\s+/g]
  filterAddress.map((filter) => (address = address.replace(filter, " ")))

  return `Phone => ${numStr}, Name => ${
    name[0].match(/[^<>]+/g)[0]
  }, Address => ${address.trim()}`
}
module.exports = phone

```