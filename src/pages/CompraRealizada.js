import React from 'react';
import Header from '../components/Header/Header';
import compraRealizada from '../assets/compra-realizada.png'

const CompraRealizada = () => {
          return (
                    <>
                              <Header />
                              <div className='container_products'>
                                        <div className='card-carrinho'>
                                                  <div className='card-body-carrinho'>
                                                            <h1>Compra realizada com sucesso!</h1>
                                                            <img src={compraRealizada} alt="" />
                                                  </div>
                                                  <div className='btn_add_cart-carrinho'>
                                                            <a href='/' >
                                                                      VOLTAR
                                                            </a>
                                                  </div>

                                        </div>


                              </div>
                    </>
          );
}

export default CompraRealizada;