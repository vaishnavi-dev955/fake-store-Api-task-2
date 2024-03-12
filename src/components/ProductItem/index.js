import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class ProductItem extends Component {
  render() {
    const {productDetails} = this.props
    const {id} = productDetails
    const {image, price, count} = productDetails
    return (
      <li className="list-main-container1">
        <Link to={`/products/${id}`} className="link-item">
          <img src={image} alt={count} className="img-style1" />
          <div className="mini-items-container">
            <p className="price-para">Price :{price}</p>
            <p className="count-para">rating :{count}</p>
          </div>
        </Link>
      </li>
    )
  }
}

export default ProductItem
