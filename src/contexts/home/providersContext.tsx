import React, {} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../redux'
import { Provider } from '../../types/home';
import { getProviders } from '../../adapters';
import { setProviders } from '../../redux/providers';






  
type ProviderProps = {
    children: React.ReactNode;
};

type Providers = {
    providers: Provider[] | [];
    setProviders: (providers: Provider[]) => void;
};


export const ProvidersContext = React.createContext<Providers>({
    providers: [],
    setProviders: () => {}
});

export const ProvidersProvider: React.FC<ProviderProps> = ({children}) => {

    const dispatch = useDispatch();
    const handleSetProviders =(providers: Provider[])=> {
        dispatch(setProviders(providers));
    }
    

    const providers = useSelector((state: RootState) => state.providers.providers);

    React.useEffect(() => {
        
            (async()=> {
                const data = await getProviders([]);
                console.log(data)
                if (data.error) {
                    // setNotification({message: data.message, severity: 'error'})
                    return
                }
                handleSetProviders(data.data.providers);
              
            }
            )();

        
      
    }, []);


    return (
        <ProvidersContext.Provider 
            value={{
                providers: providers, 
                setProviders:  handleSetProviders
            }}>
            {children}
        </ProvidersContext.Provider>
    )
}


