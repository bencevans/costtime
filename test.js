const test = require('tape')
const costtime = require('./')

test('valid', (t) => {
  t.equal(costtime(35, '1h'), 35)
  t.equal(costtime(200, '2h30m'), 500)
  t.end()
})
