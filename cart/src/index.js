import faker from 'faker'
console.log('hello')
const content = `<div>Your card number ${faker.commerce.productName()}</div>`

document.querySelector('#card-dev').innerHTML = content