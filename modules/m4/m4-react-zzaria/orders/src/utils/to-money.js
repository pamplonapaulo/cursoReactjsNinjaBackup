function toMoney (value) {
  return Number(value).toLocaleString('en-IN', {
    style: 'currency',
    currency: 'GBP'
  })
}

export default toMoney
