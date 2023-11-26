import faker from 'faker';
let products = ""

for (let index = 0; index < 6; index++) {
    const name = faker.commerce.productName()
    products += `<div>${name}</div>`
}
document.querySelector("#product-list").innerHTML = products