import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import ProductList from './components/ProductList'
import ProductPage from './components/ProductPage'
import CartPage from './components/CartPage'

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Switch>
					<Route exact path='/' component={ProductList} />
					<Route exact path='/product/:productId' component={ProductPage} />
					<Route exact path='/cart' component={CartPage} />
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App
