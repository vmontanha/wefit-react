
import React, { useState, useEffect } from 'react';
import api from "../../services/api";
import Header from '../../components/Header/Header';
import "./Home.css"
import cartBtn from "../../assets/cart-button.png"
import "../../style/global.css"
import { useCart } from "react-use-cart";

const Home = () => {

          const [movie, setMovie] = useState([]);
          useEffect(() => {
                    api
                              .get("/products")
                              .then((response) => setMovie(response.data))
                              .catch((err) => {
                                        console.error("ops! ocorreu um erro" + err);
                              });
          }, []);
          const { addItem } = useCart();
          return (
                    <>
                              <Header />

                              <div className='container_products'>
                                        {
                                                  movie.map((item) => (
                                                            <div className='card' key={item.id}>
                                                                      <div className='card-body' >
                                                                                <img src={item.image} alt="" />
                                                                                <h3>{item.title}</h3>
                                                                      </div>
                                                                      <p>R$ {item.price}</p>
                                                                      <div className='btn_add_cart'>
                                                                                <img src={cartBtn} alt='' />
                                                                                <button onClick={
                                                                                          () => addItem(item)}>
                                                                                          ADICIONAR AO CARRINHO
                                                                                </button>
                                                                      </div>

                                                            </div>

                                                  ))
                                        }
                              </div>
                    </>
          );
}

export default Home;