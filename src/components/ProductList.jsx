import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useObserver } from 'mobx-react'
import { useStore } from '../StoreContext'

const ProductList = () => {
	const store = useStore()

	useEffect(() => {
		const loadData = async () => {
			const {
				default: { items: products }
			} = await import('../dummyData')
			store.updateProducts(products)
			console.log(products)
		}
		loadData()
		return () => {}
	}, [])
	return useObserver(() => (
		<div style={styles.root}>
			{/* <h1>Product List</h1> */}
			{store.products.map(product => {
				const { name, code, images, weight, price } = product
				const [image] = images
				const {
					path: imagePath,
					nameOptions: { alt: imageAlt }
				} = image
				return (
					<div key={`${code}`} style={styles.productCard}>
						<div style={styles.productInfoContainer}>
							<img src={imagePath} style={styles.productImage} alt={imageAlt} />
							<div style={styles.name}>{name}</div>
							<div style={styles.weight}>{weight}</div>
						</div>
						<div style={styles.productPriceContainer}>
							<div style={styles.priceLabel}>
								<div style={styles.priceText}>
									{price} Р <div style={styles.pricePlusSign}>+</div>
								</div>
							</div>
						</div>
					</div>
				)
			})}
			<Link to={`/cart`}>cart</Link>
			<br />
			<Link to={`/product/101`}>product 101</Link>
		</div>
	))
}

const styles = {
	root: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	productCard: {
		width: '43%',
		padding: 10,
		display: 'flex',
		flexDirection: 'column'
	},
	productInfoContainer: {
		flex: 1
	},
	productPriceContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'flex-start'
	},
	productImage: {
		width: '100%',
		borderRadius: 10
	},
	weight: {
		color: 'grey'
	},
	priceLabel: {
		padding: 10,
		backgroundColor: 'black',
		display: 'inline-block',
		borderRadius: 10
	},

	priceText: { color: 'white', display: 'inline-block' },
	pricePlusSign: {
		fontSize: 20,
		display: 'inline-block'
	}
}

export default ProductList
