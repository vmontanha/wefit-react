import React from 'react'
import '../Header/Header.css'
import cartIcon from '../../assets/cart.png'
import { useCart } from "react-use-cart";

const Header = () => {
          const {
                    totalUniqueItems,
          } = useCart();

          return (
                    <div className='container__header'>
                              <nav className='navbar'>
                                        <h1 className='header__title'>WeMovies</h1>
                                        <div className='header__cart'>

                                                  <div className='header__cart_itens'>
                                                            <h3>Meu Carrinho</h3>
                                                            <p>{totalUniqueItems} items</p>
                                                  </div>
                                                  <a href="/carrinho" ><img src={cartIcon} alt='' /></a>
                                        </div>

                              </nav>
                    </div>
          )
}

export default Header