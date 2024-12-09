import {configureStore, createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    selectedCategory: 'Smart Phone',
    categories: ['Smart Phone', 'Ipad', 'MacBook'],
    filter: 'Best Sales',
    products: [
      {id: 1, name: 'Smartphone 1', price: 899, category: 'Smart Phone', filter: 'Best Sales'},
      {id: 2, name: 'Smartphone 2', price: 789, category: 'Smart Phone', filter: 'Popular'},
      {id: 3, name: 'Ipad 1', price: 999, category: 'Ipad', filter: 'Best Matched'},
      {id: 4, name: 'MacBook 1', price: 1299, category: 'MacBook', filter: 'Best Sales'},
      {id: 5, name: 'Smartphone 3', price: 899, category: 'Smart Phone', filter: 'Best Matched'},
    ],
    showAll: false,
  },
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.filter = 'Best Sales';
      state.showAll = false;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    toggleShowAll: (state) => {
      state.showAll = !state.showAll;
    },
  },
});

export const {setCategory, setFilter, toggleShowAll} = productSlice.actions;
export const store = configureStore({reducer: {products: productSlice.reducer}});
