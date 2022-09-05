import React from "react";
import {
          BrowserRouter,
          Routes,
          Route,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Carrinho from "../pages/Carrinho/Carrinho";
import CompraRealizada from "../pages/CompraRealizada";

const RoutesComponent = () => {

          return (
                    <BrowserRouter>
                              <Routes>
                                        <Route index element={<Home />} />
                                        <Route path="/carrinho" element={<Carrinho />} />
                                        <Route path="/compra" element={<CompraRealizada />} />
                              </Routes>
                    </BrowserRouter>
          )
}

export default RoutesComponent;