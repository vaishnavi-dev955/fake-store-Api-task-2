import {Component} from 'react'

import './index.css'

const productsApiUrl = 'https://fakestoreapi.com/products/'

class SpecificProductItem extends Component {
  state = {SpecificProductData: {}}

  componentDidMount() {
    this.getSpecificProductDetails()
  }

  getSpecificProductDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`${productsApiUrl}${id}`)
    const fetchedData = await response.json()
    const updatedData = {
      id: fetchedData.id,
      category: fetchedData.category,
      description: fetchedData.description,
      image: fetchedData.image,
      price: fetchedData.price,
      rate: fetchedData.rating.rate,
      count: fetchedData.rating.count,
      title: fetchedData.title,
    }
    this.setState({SpecificProductData: updatedData})
  }

  render() {
    const {SpecificProductData} = this.state
    const {image, description, price, rate, title} = SpecificProductData
    return (
      <div className="specific-product-main-container">
        <img src={image} alt={title} className="specific-image" />
        <h1 className="title-heading">{title}</h1>
        <p className="All-para1">{description}</p>
        <p className="All-para">price: {price}</p>
        <p className="All-para">rating: {rate}</p>
      </div>
    )
  }
}

export default SpecificProductItem
