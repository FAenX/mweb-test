import ComponentHost from './componentHost'
import {CampaignsProvider, ProvidersProvider, ProductsProvider, PriceRangeProvider} from '../../contexts/home'

export function Component (){
    

    return (
        <CampaignsProvider >
            <ProvidersProvider>
                <ProductsProvider>
                    <PriceRangeProvider>
                        <ComponentHost />
                    </PriceRangeProvider>
                </ProductsProvider>
            </ProvidersProvider>
        </CampaignsProvider >
    );
};