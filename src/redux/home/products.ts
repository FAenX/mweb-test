import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../types/home';




interface ProductsState {
    products: Product[];
    selectedProducts: string;
}


const initialState: ProductsState  = {
    products: [],
    selectedProducts: "",
};


const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload
    },
    selectProducts: (state, action: PayloadAction<string>) => {
        state.selectedProducts = action.payload
    }
  },
});




const { setProducts, selectProducts } = productsSlice.actions;

export default productsSlice.reducer;
export {
    setProducts,
    selectProducts,
}