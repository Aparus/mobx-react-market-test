import { useObserver } from 'mobx-react-lite'
import React from 'react'
import { useStore } from '../StoreContext'

const CartProductCountSwitcher = props => {
	const { productCode: code, color } = props
	const store = useStore()

	const handlePlus = () => {
		store.plusCartProduct(code)
	}
	const handleMinus = () => {
		store.minusCartProduct(code)
	}

	const count = useObserver(() => store.getCartProductCount(code))

	return (
		<div style={styles.productPriceContainer}>
			<div style={{ ...styles.countLabel, ...styles[color] }}>
				<div style={styles.minusButton} onClick={handleMinus}>
					-
				</div>
				<div style={styles.count}>{count}</div>
				<div style={styles.plusButton} onClick={handlePlus}>
					+
				</div>
			</div>
		</div>
	)
}

const styles = {
	countLabel: {
		borderRadius: 10,
		minWidth: 60,
		display: 'inline-flex',
		textAlign: 'center'
	},
	green: {
		padding: 10,
		backgroundColor: 'green',
		color: 'white',
		fontSize: 20
	},
	transparent: {
		padding: 5,
		color: 'grey',
		fontSize: 14
	},
	minusButton: {
		flex: 1
	},
	plusButton: {
		flex: 1
	},
	count: { flex: 1 }
}

export default CartProductCountSwitcher
