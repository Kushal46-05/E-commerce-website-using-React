import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import LoginForm from './Components/molecules/LoginForm/LoginForm';
import SignupForm from './Components/molecules/SignupForm/SignupForm';
import Home from './Components/pages/Home/Home';
import AppLayout from './Components/templates/AppLayout';
import ProductPage from './Components/pages/ProductPage/ProductPage';
import NotFoundPage from './Components/pages/404/404';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* All pages wrapped in AppLayout */}
        <Route element={<AppLayout />}>
          {/* Public Routes */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />

          {/* Protected / Main Routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/404" element={<NotFoundPage />} />

          
        </Route>
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
};

export default App;
