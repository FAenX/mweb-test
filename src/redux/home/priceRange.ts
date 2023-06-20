import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'





interface PriceRangeState {
    selectedPriceRange: string;
}


const initialState: PriceRangeState  = {
    selectedPriceRange: "",
};


const priceRangeSlice = createSlice({
  name: 'priceRange',
  initialState,
  reducers: {
    selectPriceRange: (state, action: PayloadAction<string>) => {
        state.selectedPriceRange = action.payload
    }
  },
});




const { selectPriceRange } = priceRangeSlice.actions;

export default priceRangeSlice.reducer;
export {
    selectPriceRange,
}