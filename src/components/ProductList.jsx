import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useObserver } from 'mobx-react'
import { useStore } from '../StoreContext'
import ProductInList from './ProductInList'
import CartTotalWidget from './CartTotalWidget'

const ProductList = () => {
	const store = useStore()
	const history = useHistory()

	useEffect(() => {
		const loadData = async () => {
			const {
				default: { items: products }
			} = await import('../dummyData')
			store.updateProducts(products)
		}
		loadData()
		return () => {}
	}, [])

	const productOnClickHandler = code => () => {
		history.push(`/product/${code}`)
	}

	return useObserver(() =>
		store.products.length > 0 ? (
			<div style={styles.root}>
				<CartTotalWidget />
				{/* <h1>Product List</h1> */}
				{store.products.map(product => {
					return (
						<ProductInList
							key={`${product.code}`}
							product={product}
							onClick={productOnClickHandler(product.code)}
						/>
					)
				})}
				<Link to={`/cart`}>cart</Link>
			</div>
		) : (
			<div>Loading...</div>
		)
	)
}

const styles = {
	root: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap'
	}
}

export default ProductList
