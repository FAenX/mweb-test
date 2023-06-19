import ComponentHost from './componentHost'
import {CampaignsProvider} from '../../contexts/home'



export function Component (){
    

    return (
        <CampaignsProvider >
            <ComponentHost />
        </CampaignsProvider >
    );
};