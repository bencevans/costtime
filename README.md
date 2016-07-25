# costtime

> Cost per Hour * Time Spent - Contracting Calculator

## Install

    $ npm install costtime --save

## Usage

```js
const costtime = require('costtime')
const hourlyRate = 50
const timeSpent = '12h42m'

let charge = costtime(hourlyRate, timeSpent)

console.log('£' + charge)
```

## Licence

MIT &copy; [Ben Evans](https://bencevans.io)
