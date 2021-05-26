import { useObserver } from 'mobx-react-lite'
import React from 'react'
import { useStore } from '../StoreContext'
import { useHistory } from 'react-router-dom'

const CartTotalWidget = () => {
	const store = useStore()
	const history = useHistory()
	return useObserver(() => {
		const totalPrice = store.getCartTotalPrice()
		return totalPrice ? (
			<div
				style={styles.widget}
				onClick={() => {
					history.push('/cart')
				}}
			>
				Корзина: {totalPrice} Р
			</div>
		) : null
	})
}

const styles = {
	widget: {
		position: 'fixed',
		bottom: 10,
		backgroundColor: 'rgba(0,0,0,0.8)',
		width: '80%',
		margin: 10,
		padding: 20,
		borderRadius: 10,
		color: 'white'
	}
}

export default CartTotalWidget
