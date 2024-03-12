import {Component} from 'react'

import ProductItem from '../ProductItem'

import './index.css'

class AllProducts extends Component {
  state = {productsList: []}

  componentDidMount() {
    this.getProductsData()
  }

  getProductsData = async () => {
    const apiUrl = 'https://fakestoreapi.com/products'
    const response = await fetch(apiUrl)
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      category: each.category,
      description: each.description,
      image: each.image,
      price: each.price,
      rate: each.rating.rate,
      count: each.rating.count,
      title: each.title,
    }))

    this.setState({productsList: updatedData})
  }

  render() {
    const {productsList} = this.state
    console.log(productsList)
    return (
      <div className="main-container1">
        <h1 className="p-heading">Products</h1>
        <ul className="products-main-container1">
          {productsList.map(eachItem => (
            <ProductItem key={eachItem.id} productDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default AllProducts
