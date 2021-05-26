import { useObserver } from 'mobx-react-lite'
import React from 'react'
import { useStore } from '../StoreContext'

const ProductAddToCartButton = props => {
	const { product } = props
	const { code, price } = product
	const store = useStore()

	const handlePlus = () => {
		store.plusCartProduct(code)
	}
	const handleMinus = () => {
		store.minusCartProduct(code)
	}

	const priceButton = (
		<div style={styles.productPriceContainer} onClick={handlePlus}>
			<div style={styles.priceLabel}>
				<div style={styles.priceText}>
					{price} Р <div style={styles.pricePlusSign}>+</div>
				</div>
			</div>
		</div>
	)

	const count = useObserver(() => store.getCartProductCount(code))

	const countButton = (
		<div style={styles.countButtonContainer}>
			<div style={styles.minusButton} onClick={handleMinus}>
				-
			</div>
			<div style={styles.count}>{count}</div>
			<div style={styles.plusButton} onClick={handlePlus}>
				+
			</div>
		</div>
	)

	return count ? countButton : priceButton
}

const styles = {
	productPriceContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'flex-start'
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
	},
	//
	countButtonContainer: {
		padding: 10,
		textAlign: 'center',
		backgroundColor: 'green',
		color: 'white',
		borderRadius: 10,
		display: 'inline-flex',
		justifyContent: 'center'
	},
	minusButton: {
		flex: 1
	},
	plusButton: {
		flex: 1
	},
	count: { flex: 1 }
}

export default ProductAddToCartButton
