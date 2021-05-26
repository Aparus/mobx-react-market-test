import { useObserver } from 'mobx-react-lite'
import React from 'react'
import { useStore } from '../StoreContext'
import CartProductCountSwitcher from './CartProductCountSwitcher'

const ProductAddToCartButton = props => {
	const { product } = props
	const { code, price } = product
	const store = useStore()

	const handlePlus = () => {
		store.plusCartProduct(code)
	}

	const count = useObserver(() => store.getCartProductCount(code))

	const priceButton = (
		<div style={styles.productPriceContainer} onClick={handlePlus}>
			<div style={styles.priceLabel}>
				<div style={styles.priceText}>
					{price} Р <div style={styles.pricePlusSign}>+</div>
				</div>
			</div>
		</div>
	)

	const countSwitcher = (
		<CartProductCountSwitcher productCode={code} color='green' />
	)

	return count ? countSwitcher : priceButton
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
		minWidth: 60,
		borderRadius: 10,
		color: 'white'
	},

	priceText: { display: 'inline-block' },
	pricePlusSign: {
		fontSize: 20,
		display: 'inline-block'
	}
}

export default ProductAddToCartButton
