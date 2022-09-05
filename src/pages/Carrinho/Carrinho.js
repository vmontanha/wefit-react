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
                    totalUniqueItems,
                    items,
                    totalItems,
                    cartTotal,
                    updateItemQuantity,
                    removeItem,
                    emptyCart,
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
                                                  </div>
                                                  <div className='box-line'>
                                                            <img src={line} className='line' alt="" />
                                                  </div>
                                                  <div className='btn_add_cart-carrinho'>
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


                              <div class="card-carrinho">
                                        <div className="card-body-carrinho">
                                                  {items.map((item) => {
                                                            return (
                                                                      <div className="card-box">
                                                                                <div className="col-4">
                                                                                          <img src={item.image} alt='' />
                                                                                </div>
                                                                                <div class="card-description">
                                                                                          <h5 class="card-title">{item.title}</h5>
                                                                                          <div className="card-buttons">

                                                                                                    <div className="quantidade-buttons">
                                                                                                              <img src={reduceIcon} alt='' onClick={() => updateItemQuantity(item.id, item.quantity - 1)} />
                                                                                                              <button type="button" disabled class="btn btn-outline-dark"
                                                                                                              >  {item.quantity}</button>
                                                                                                              <img src={plusIcon} alt='' onClick={() => updateItemQuantity(item.id, item.quantity + 1)} />
                                                                                                    </div>
                                                                                                    <img src={trashIcon} alt='' onClick={() => removeItem(item.id)} />
                                                                                          </div>
                                                                                          <div className="box-price">
                                                                                                    <h5>${item.price}</h5>
                                                                                          </div>
                                                                                </div>
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