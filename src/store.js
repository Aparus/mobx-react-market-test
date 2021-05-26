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
			this.cart[code] = oldCount ? oldCount - 1 : 0
		},
		getCartProductCount(code) {
			return this.cart[code]
		}
	}
}
