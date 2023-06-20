import ComponentHost from './componentHost'
import {CampaignsProvider, ProvidersProvider, ProductsProvider} from '../../contexts/home'
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material';


export const themeOptions: ThemeOptions = {
    palette: {
      mode: 'dark',
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
    },
  };
  
  const theme = createTheme(themeOptions);


export function Component (){
    

    return (
        <ThemeProvider
            theme={theme}
        >
            <CampaignsProvider >
                <ProvidersProvider>
                    <ProductsProvider>
                        <ComponentHost />
                    </ProductsProvider>
                </ProvidersProvider>
            </CampaignsProvider >
        </ThemeProvider>

    );
};