import React, {} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Provider } from '../../types/home';
import { getProviders } from '../../adapters';
import { selectProvider, setProviders } from '../../redux/home/providers';
import { RootState } from '../../redux';







  
type ProviderProps = {
    children: React.ReactNode;
};

type Providers = {
    providers: Provider[] | [];
    setProviders: (providers: Provider[]) => void;
    selectProvider: (provider: string) => void;
    selectedProvider: string
};


export const ProvidersContext = React.createContext<Providers>({
    providers: [],
    setProviders: () => {},
    selectProvider: ()=>{},
    selectedProvider: ""
});

export const ProvidersProvider: React.FC<ProviderProps> = ({children}) => {

    const dispatch = useDispatch();
    const handleSetProviders =(providers: Provider[])=> {
        dispatch(setProviders(providers));
    }
    const handleSelectProvider=(provider: string)=> {
        dispatch(selectProvider(provider))
    }
    

    const providers = useSelector((state: RootState) => state.providers.providers);
    const selectedCampaign = useSelector((state: RootState)=>state.campaigns.selectedCampaign)
    const campaigns = useSelector((state: RootState) => state.campaigns.campaigns);
    const selectedProvider = useSelector((state: RootState)=> state.providers.selectedProvider)


    React.useEffect(() => {
        (async()=> {
            const promocodes = campaigns && campaigns.length > 0 && campaigns
                .filter(campaign=>campaign.code===selectedCampaign)[0]
                .promocodes
            const data = promocodes && promocodes.length > 0 && await getProviders(promocodes);
            if (data.error) {
                return
            }
            handleSetProviders(data.data); 
        }
        )();
    }, [selectedCampaign]);


    return (
        <ProvidersContext.Provider 
            value={{
                providers: providers, 
                setProviders:  handleSetProviders,
                selectProvider: handleSelectProvider,
                selectedProvider: selectedProvider
            }}>
            {children}
        </ProvidersContext.Provider>
    )
}


