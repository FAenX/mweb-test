import ComponentHost from './componentHost'
import {CampaignsProvider, ProvidersProvider} from '../../contexts/home'



export function Component (){
    

    return (
        <CampaignsProvider >
            <ProvidersProvider>
                <ComponentHost />
            </ProvidersProvider>
        </CampaignsProvider >
    );
};