import React from 'react'
import { useStore } from '../StoreContext'
import CartTotalWidget from './CartTotalWidget'
import ProductInList from './ProductInList'

const ProductPage = props => {
	const store = useStore()
	const { productCode } = props.match.params
	const product = store.getProductByCode(productCode)
	return (
		<div>
			<ProductInList product={product} />
			<CartTotalWidget />
		</div>
	)
}

export default ProductPage
