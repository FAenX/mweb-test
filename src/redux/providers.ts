import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Provider } from '../types/home';




interface CampaignState {
    providers: Provider[];
    selectedProvider: string;
}


const initialState: CampaignState  = {
    providers: [],
    selectedProvider: "",
};


const campaignsSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    setProviders: (state, action: PayloadAction<Provider[]>) => {
        state.providers = action.payload
    },
    selectProvider: (state, action: PayloadAction<string>) => {
        state.selectedProvider = action.payload
    }
  },
});




const { setProviders, selectProvider } = campaignsSlice.actions;

export default campaignsSlice.reducer;
export {
    setProviders,
    selectProvider,
}