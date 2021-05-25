import { useObserver } from 'mobx-react'
import './App.css'
import { useStore } from './StoreContext'

function App() {
	const store = useStore()

	return useObserver(() => (
		<div className='App'>
			<ul>
				{store.cartProducts.map(product => {
					const { id, title } = product
					return (
						<li key={`product-${id}`}>
							<button onClick={() => store.removeCartProduct(id)}>x</button>{' '}
							{title}
						</li>
					)
				})}
			</ul>
		</div>
	))
}

export default App
