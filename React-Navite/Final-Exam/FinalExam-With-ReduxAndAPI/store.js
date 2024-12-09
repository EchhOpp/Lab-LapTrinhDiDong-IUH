import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Lấy danh sách sản phẩm từ API
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://67168b7e3fcb11b265d2d7a8.mockapi.io/products');
  return response.json();
});

// Lưu giỏ hàng lên API
export const saveCart = createAsyncThunk('products/saveCart', async (cart) => {
  const response = await fetch('https://67168b7e3fcb11b265d2d7a8.mockapi.io/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items: cart }),
  });
  return response.json();
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(saveCart.fulfilled, (state) => {
      state.cart = []; // Xóa giỏ hàng sau khi lưu thành công
    });
  },
});

export const { addToCart, removeFromCart, clearCart } = productSlice.actions;

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});
