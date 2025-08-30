import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { id, size, color, quantity } = action.payload;

      const existingIndex = state.cart.findIndex(
        item => item.id === id && item.size === size && item.color === color
      );

      if (existingIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingIndex] = {
          ...updatedCart[existingIndex],
          quantity: updatedCart[existingIndex].quantity + quantity,
        };
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload }],
        };
      }
    }

    case 'UPDATE_QUANTITY': {
      const { id, size, color, quantity } = action.payload;

      const updatedCart = state.cart.map(item =>
        item.id === id && item.size === size && item.color === color
          ? { ...item, quantity }
          : item
      );

      return {
        ...state,
        cart: updatedCart,
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
