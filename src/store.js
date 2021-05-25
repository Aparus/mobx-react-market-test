export const createStore = () => {
	return {
		// products
		products: [],
		updateProducts(products) {
			this.products = products
		},
		// cart
		cartProducts: [
			{ id: 1, title: 'product1' },
			{ id: 2, title: 'product2' },
			{ id: 3, title: 'product3' },
			{ id: 4, title: 'product4' },
			{ id: 5, title: 'product5' },
			{ id: 6, title: 'product6' }
		],
		addCartProduct(product) {
			this.cartProducts.push(product)
		},
		removeCartProduct(id) {
			this.cartProducts = this.cartProducts.filter(product => product.id !== id)
		}
	}
}
