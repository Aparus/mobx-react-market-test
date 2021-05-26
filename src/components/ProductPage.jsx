import React from 'react'
import { useStore } from '../StoreContext'
import ProductInList from './ProductInList'

const ProductPage = props => {
	const store = useStore()
	const { productCode } = props.match.params
	const product = store.getProductByCode(productCode)
	return <ProductInList product={product} />
}

export default ProductPage
