import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const exists = state.cart.find(item => item.id === action.payload.id);
      return {
        ...state,
        cart: exists ? state.cart : [...state.cart, action.payload],
      };
    }

    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    }

    case 'CLEAR_CART': {
      return {
        ...state,
        cart: [],
      };
    }

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
