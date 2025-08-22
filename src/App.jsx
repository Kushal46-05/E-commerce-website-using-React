import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoginForm from './Components/molecules/LoginForm/LoginForm';
import SignupForm from './Components/molecules/SignupForm/SignupForm';
import Home from './Components/pages/Home/Home';
import AppLayout from './Components/templates/AppLayout';
import ProductPage from './Components/pages/ProductPage/ProductPage';
import NotFoundPage from './Components/pages/404/404';
import CategoryDisplay from './Components/pages/CategoryDisplay/CategoryDisplay';
import CartPage from './Components/pages/CartPage/CartPage';
import ShopPage from './Components/pages/ShopPage/ShopPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to home */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* All pages wrapped in AppLayout */}
        <Route element={<AppLayout />}>
          {/* Public Routes */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />

          {/* Main Routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/category/:type" element={<CategoryDisplay />} />
          <Route path="/cart" element={<CartPage />} /> {/* ✅ NEW */}
          <Route path="/404" element={<NotFoundPage />} />
           <Route path="/shop" element={<ShopPage />} />

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
};

export default App;
