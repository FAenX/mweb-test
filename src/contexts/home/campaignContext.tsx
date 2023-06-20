import React, {} from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { Campaign } from '../../types/home';
import { getCampaigns } from '../../adapters';
import { selectCampaign, setCampaigns } from '../../redux/home/campaigns';
import { RootState } from '../../redux';






  
type ProviderProps = {
    children: React.ReactNode;
};

type CampaignsContextType = {
    campaigns: Campaign[] | [];
    setCampaigns: (campaigns: Campaign[]) => void;
    selectCampaign: (code: string) => void,
    selectedCampaign: string
};


export const CampaignsContext = React.createContext<CampaignsContextType>({
    campaigns: [],
    setCampaigns: () => {},
    selectCampaign: ()=>"",
    selectedCampaign: ""
});

export const CampaignsProvider: React.FC<ProviderProps> = ({children}) => {

    const dispatch = useDispatch();
    const handleSetCampaigns =(campaigns: Campaign[])=> {
        dispatch(setCampaigns(campaigns));
    }

    const handleSelectCampaign=(code: string)=> {
        dispatch(selectCampaign(code))
    }
    

    const campaigns = useSelector((state: RootState) => state.campaigns.campaigns);
    const selectedCampaign = useSelector((state: RootState)=>state.campaigns.selectedCampaign)

    React.useEffect(() => {
        (async()=> {
            const data = await getCampaigns();
            if (data.error) {
                // setNotification({message: data.message, severity: 'error'})
                return
            }
            handleSetCampaigns(data.data.campaigns);
            
        }
        )();
    }, []);


    return (
        <CampaignsContext.Provider 
            value={{
                campaigns: campaigns, 
                setCampaigns:  handleSetCampaigns,
                selectCampaign: handleSelectCampaign,
                selectedCampaign: selectedCampaign

            }}>
            {children}
        </CampaignsContext.Provider>
    )
}


