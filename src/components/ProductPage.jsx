import React from 'react'

const ProductPage = props => {
	const { productId } = props.match.params
	return <div>ProductPage {productId}</div>
}

export default ProductPage
