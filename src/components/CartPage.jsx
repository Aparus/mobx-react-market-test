import React from 'react'
import { useObserver } from 'mobx-react-lite'
import { useStore } from '../StoreContext'
import CartProductCountSwitcher from './CartProductCountSwitcher'

const CartPage = () => {
	const store = useStore()
	return useObserver(() => {
		const { cart, products } = store
		const cartProductCodes = Object.keys(cart)
		const cartProducts = products.filter(product =>
			cartProductCodes.includes(product.code)
		)
		const totalPrice = store.getCartTotalPrice()

		return (
			<div>
				{cartProducts.map(product => {
					const { name = '', images, price, code } = product
					const [image] = images
					const {
						path: imagePath,
						nameOptions: { alt: imageAlt }
					} = image
					// const count = cart[code]
					return (
						<div key={code} style={styles.container}>
							<div style={styles.imageContainer}>
								<img style={styles.image} src={imagePath} alt={imageAlt} />
							</div>
							<div style={styles.textBlock}>
								<div style={styles.name}>{name}</div>
								<div style={styles.price}>{price} Р</div>
							</div>
							<div style={styles.countSwitcherContainer}>
								<CartProductCountSwitcher
									productCode={code}
									color='transparent'
								/>
							</div>
						</div>
					)
				})}

				<div>Еды на сумму {totalPrice}</div>
			</div>
		)
	})
}

const styles = {
	container: { display: 'flex' },
	imageContainer: { flex: 1 },
	image: { width: 50, height: 50 },
	textBlock: { flex: 4 },
	countSwitcherContainer: { flex: 1 }
}

export default CartPage
