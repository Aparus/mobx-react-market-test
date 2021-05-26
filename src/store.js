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
		cartProducts: {}, // {code: count}
		plusCartProduct(code) {
			const oldCount = this.cartProducts[code] || 0
			this.cartProducts[code] = oldCount + 1
		},
		minusCartProduct(code) {
			const oldCount = this.cartProducts[code] || 0
			this.cartProducts[code] = oldCount ? oldCount - 1 : 0
		},
		getCartProductCount(code) {
			return this.cartProducts[code]
		}
	}
}
