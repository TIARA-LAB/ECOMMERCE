import React, { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cart: (() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  })(),
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { product, qty } = action.payload;
      const exists = state.cart.find((i) => i.id === product.id);
      const cart = exists
        ? state.cart.map((i) =>
            i.id === product.id ? { ...i, qty: i.qty + qty } : i
          )
        : [...state.cart, { ...product, qty }];
      return { ...state, cart };
    }

    case "UPDATE_QTY": {
      const { id, qty } = action.payload;
      const cart = state.cart
        .map((i) => (i.id === id ? { ...i, qty } : i))
        .filter((i) => i.qty > 0);
      return { ...state, cart };
    }

    case "REMOVE_ITEM": {
      return { ...state, cart: state.cart.filter((i) => i.id !== action.payload) };
    }

    case "CLEAR_CART":
      return { ...state, cart: [] };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);


  const addToCart = (product, qty = 1) =>
    dispatch({ type: "ADD_TO_CART", payload: { product, qty } });

  const updateQty = (id, qty) =>
    dispatch({ type: "UPDATE_QTY", payload: { id, qty: Number(qty) } });

  const removeFromCart = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const itemCount = state.cart.reduce((sum, i) => sum + i.qty, 0);
  const total = state.cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        updateQty,
        removeFromCart,
        clearCart,
        itemCount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

