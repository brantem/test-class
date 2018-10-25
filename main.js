class Cart {
  constructor () {
    this.products = []
  }

  addProduct (productCode, quantity) {
    const productIndex = this.products.findIndex(product => product.productCode === productCode)

    if (!~productIndex) { // ~ = turn -1 into 0
      this.products.push({
        productCode,
        quantity
      })
    } else {
      this.products[productIndex].quantity += quantity
    }
  }

  removeProduct (productCode) {
    const productIndex = this.products.findIndex(product => product.productCode === productCode)

    if (~productIndex) { // ~ = turn -1 into 0
      this.products.splice(productIndex, 1)
    }
  }

  showCart () {
    this.products.forEach(product => console.log(`${product.productCode} (${product.quantity})`))
  }
}

const cart = new Cart()

cart.addProduct("White Cap", 2)

cart.addProduct("Red Shoes", 1)
cart.addProduct("Red Shoes", 4)
cart.addProduct("Red Shoes", 2)

cart.addProduct("Black Shirt", 3)
cart.removeProduct("Black Shirt")

cart.removeProduct("Green Jacket")

cart.showCart()
