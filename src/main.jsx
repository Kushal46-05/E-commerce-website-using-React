import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './context/CartContext';  // ✅ import your provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider> {/* ✅ wrap App with CartProvider */}
      <App />
    </CartProvider>
  </React.StrictMode>
);
