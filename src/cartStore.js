export const createCartStore = () => {
	return {
		products: [
			{ id: 1, title: 'product1' },
			{ id: 2, title: 'product2' },
			{ id: 3, title: 'product3' },
			{ id: 4, title: 'product4' },
			{ id: 5, title: 'product5' },
			{ id: 6, title: 'product6' }
		],
		addProduct(product) {
			this.products.push(product)
		},
		removeProduct(id) {
			this.products = this.products.filter(product => product.id !== id)
		}
	}
}
