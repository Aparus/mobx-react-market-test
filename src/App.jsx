import { useObserver } from 'mobx-react'
import './App.css'
import { useCartStore } from './CartContext'

function App() {
	const cartStore = useCartStore()

	return useObserver(() => (
		<div className='App'>
			<ul>
				{cartStore.products.map(product => {
					const { id, title } = product
					return (
						<li key={`product-${id}`}>
							<button onClick={() => cartStore.removeProduct(id)}>x</button>{' '}
							{title}
						</li>
					)
				})}
			</ul>
		</div>
	))
}

export default App
