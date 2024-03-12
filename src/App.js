import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import AllProducts from './components/AllProducts'
import SpecificProductItem from './components/SpecificProductItem'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/products" component={AllProducts} />
    <Route exact path="/products/:id" component={SpecificProductItem} />
  </Switch>
)

export default App
