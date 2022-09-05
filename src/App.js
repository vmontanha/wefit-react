import React from 'react';
import RoutesComponent from "./routes/routes";
import { CartProvider } from "react-use-cart";

export default function App() {
          return (
                    <CartProvider>
                              <RoutesComponent />
                    </CartProvider>
          );
}
