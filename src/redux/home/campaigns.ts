import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Campaign } from '../../types/home';




interface CampaignState {
    campaigns: Campaign[];
    selectedCampaign: string;
}


const initialState: CampaignState  = {
    campaigns: [],
    selectedCampaign: "",
};


const campaignsSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    setCampaigns: (state, action: PayloadAction<Campaign[]>) => {
        state.campaigns = action.payload
    },
    selectCampaign: (state, action: PayloadAction<string>) => {
        state.selectedCampaign = action.payload
    }
  },
});




const { setCampaigns, selectCampaign } = campaignsSlice.actions;

export default campaignsSlice.reducer;
export {
    setCampaigns,
    selectCampaign,
}