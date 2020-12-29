import React from 'react'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
import './Header.css'

function Header() {
      const [{ basket, user }, dispatch] = useStateValue()

      const handleAuth = () => {
            if (user) {
                  auth.signOut()
            }
      }

      return (
            <div className="header">
                  <Link to="/">
                        <img 
                              className="header__logo" 
                              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        />
                  </Link>
                  <div className="header__search">
                        <input className="header__searchInput" type="text"></input>
                        <SearchIcon className="header__searchIcon" /> 
                  </div>
                  <div className="header__nav">
                        {/* only redirect to login page if there is no user */}
                        <Link to = {!user && "/login"}>
                              <div onClick={handleAuth} className="header__option">
                                    <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                                    <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                              </div>
                        </Link>

                        <Link to="/orders">
                              <div className="header__option">
                                    <span className="header__optionLineOne">Returns</span>
                                    <span className="header__optionLineTwo">& Orders</span>                              
                              </div>
                        </Link>
                        <div className="header__option">
                              <span className="header__optionLineOne">Your</span>
                              <span className="header__optionLineTwo">Prime</span>
                        </div> 

                        <Link to="/checkout">
                              <div className="header__optionBasket">
                                    <ShoppingCartIcon />
                                    <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
                              </div>
                        </Link>
                  </div>
            </div>
      )
}

export default Header
