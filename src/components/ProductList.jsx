import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = () => {
	return (
		<div>
			<div>ProductList</div>
			<Link to={`/cart`}>cart</Link>
			<br />
			<Link to={`/product/101`}>product 101</Link>
		</div>
	)
}

export default ProductList
