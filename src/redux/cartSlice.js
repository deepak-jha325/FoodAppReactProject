
// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.find(i => i.id == item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...item, quantity: 1 });
      }
    },
    removeOne: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.find(i => i.id === itemId);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          return state.filter(i => i.id !== itemId);
        }
      }
    },
    removeAll: (state, action) => {
      return state.filter(i => i.id !== action.payload);
    },
    clearCart: () => {
      return []; // reset cart to empty
    }
    
  }
  
});

export const { addToCart, removeOne, removeAll,clearCart } = cartSlice.actions;
export default cartSlice.reducer;



/*import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      let item = state.find(s => s.id == action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    }
  }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;*/



/*import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { count: 0 },
  reducers: {
    addToCart: (state) => {
      state.count += 1;
    },
    removeFromCart: (state) => {
      if (state.count > 0) state.count -= 1;
    },
    resetCart: (state) => {
      state.count = 0;
    }
  }
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;*/
