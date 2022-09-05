import React from 'react';
import Header from '../../components/Header/Header';
import "./Carrinho.css"
import "../../style/global.css"
import cartVazio from "../../assets/carrinho_vazio.png"
import plusIcon from "../../assets/plus-icon.png"
import line from "../../assets/line.png"
import { useCart } from 'react-use-cart';
import reduceIcon from "../../assets/reduce-icon.png"
import trashIcon from "../../assets/trash.png"
const Carrinho = () => {
          const {
                    isEmpty,
                    items,
                    cartTotal,
                    updateItemQuantity,
                    removeItem,
          } = useCart();

          // localStorage.clear();
          console.log(items)

          if (isEmpty) return (
                    <>
                              <Header />
                              <div className='container_products'>
                                        <div className='card-carrinho'>
                                                  <div className='card-body-carrinho'>
                                                            <h1>Parece que não há nada por aqui :(</h1>
                                                            <img src={cartVazio} alt="" />
                                                            <img src={line} className='line' alt="" />
                                                  </div>

                                                  <div className='btn_add_cart-carrinho voltar'>
                                                            <a href='/' >
                                                                      VOLTAR
                                                            </a>
                                                  </div>

                                        </div>


                              </div>
                    </>
          )
          return (
                    <>
                              <Header />

                              <div className='container_products'>

                                        <div className="card-body-carrinho">
                                                  {items.map((item) => {
                                                            return (
                                                                      <div class="card-carrinho-checkout">
                                                                                <div className="card-box-title">
                                                                                          <h1>PRODUTO</h1>
                                                                                          <h1>QTD</h1>
                                                                                          <h1>SUBTOTAL</h1>
                                                                                </div>
                                                                                <div className="card-box">
                                                                                          <img src={item.image} alt='' className='img-movie' />


                                                                                          <div class="card-description">
                                                                                                    <h5 class="card-title">{item.title}</h5>
                                                                                                    <h5>R${item.price}</h5>
                                                                                          </div>
                                                                                          <div className="card-buttons">
                                                                                                    <div className="quantidade-buttons">
                                                                                                              <img src={reduceIcon} alt='' onClick={() => updateItemQuantity(item.id, item.quantity - 1)} />
                                                                                                              <button type="button" disabled class="btn btn-outline-dark"
                                                                                                              >  {item.quantity}</button>
                                                                                                              <img src={plusIcon} alt='' onClick={() => updateItemQuantity(item.id, item.quantity + 1)} />
                                                                                                    </div>
                                                                                          </div>
                                                                                          <h5 className='subtotal'>R${cartTotal}</h5>
                                                                                          <img src={trashIcon} alt='' className='trash-img' onClick={() => removeItem(item.id)} />

                                                                                </div>
                                                                                <img src={line} className='line-cart' alt="" />
                                                                                <div className='card-carrinho-footer'>
                                                                                          <div className='btn_add_cart-carrinho'>
                                                                                                    <a href='/compra' className=''>
                                                                                                              FINALIZAR PEDIDO
                                                                                                    </a>

                                                                                          </div>
                                                                                          <div className='box-total'>
                                                                                                    <h2>TOTAL</h2>
                                                                                                    <h4>R$ {cartTotal}</h4>
                                                                                          </div>
                                                                                </div>
                                                                      </div>

                                                            )
                                                  })}
                                        </div>
                              </div>

                    </>
          );
}
export default Carrinho;