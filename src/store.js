export const createStore = () => {
	return {
		// products
		products: [],
		updateProducts(products) {
			this.products = products
		},
		getProductByCode(code) {
			return this.products.find(product => product.code === code)
		},
		// cart
		cart: {}, // {code: count}
		plusCartProduct(code) {
			const oldCount = this.cart[code] || 0
			this.cart[code] = oldCount + 1
		},
		minusCartProduct(code) {
			const oldCount = this.cart[code] || 0
			const newCount = oldCount ? oldCount - 1 : 0
			this.cart[code] = newCount
			if (newCount === 0) {
				delete this.cart[code]
			}
		},
		getCartProductCount(code) {
			return this.cart[code]
		}
	}
}
