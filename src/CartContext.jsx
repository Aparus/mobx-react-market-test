import React from 'react'
import { useLocalStore } from 'mobx-react'
import { createCartStore } from './cartStore'

const CartContext = React.createContext(null)

export const CartProvider = ({ children }) => {
	const cartStore = useLocalStore(createCartStore)

	return (
		<CartContext.Provider value={cartStore}>{children}</CartContext.Provider>
	)
}

export const useCartStore = () => React.useContext(CartContext)
