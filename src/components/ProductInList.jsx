import React from 'react'
import ProductAddToCartButton from './ProductAddToCartButton'

const ProductInList = props => {
	const { product } = props
	const { name = '', images, weight, price } = product
	const [image] = images
	const {
		path: imagePath,
		nameOptions: { alt: imageAlt }
	} = image
	return (
		<div style={styles.productCard}>
			<div style={styles.productInfoContainer}>
				<img
					src={imagePath}
					style={styles.productImage}
					alt={imageAlt}
					onClick={props.onClick}
				/>
				<div style={styles.name}>{name}</div>
				<div style={styles.weight}>{weight} г</div>
			</div>
			<ProductAddToCartButton product={product} />
		</div>
	)
}

const styles = {
	productCard: {
		width: '43%',
		padding: 10,
		display: 'flex',
		flexDirection: 'column'
	},
	productInfoContainer: {
		flex: 1
	},

	productImage: {
		width: '100%',
		borderRadius: 10
	},
	weight: {
		color: 'grey'
	}
}

export default ProductInList
