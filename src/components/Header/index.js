// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="container">
    <ul>
      <li>
        <Link to="/" className="text">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="text">
          About
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
