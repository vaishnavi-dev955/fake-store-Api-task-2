// Write your JS code here
import './index.css'

import {Link} from 'react-router-dom'

const Home = () => (
  <div className="Home-container">
    <h1 className="Home-heading">Welcome to fake Store</h1>
    <Link to="/products">
      <button type="button" className="product-button">
        Go to Products page
      </button>
    </Link>
  </div>
)

export default Home
