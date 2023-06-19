// import React, {} from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { RootState } from '../../redux'
// import { Campaign } from '../../types/home';
// import { getCampaigns } from '../../adapters';
// import { setCampaigns } from '../../redux/campaigns';





  
// type ProviderProps = {
//     children: React.ReactNode;
// };

// type Campaigns = {
//     campaigns: Campaign[] | [];
//     setCampaigns: (campaigns: Campaign[]) => void;
// };


// export const CampaignsContext = React.createContext<Campaigns>({
//     campaigns: [],
//     setCampaigns: () => {}
// });

// export const CampaignsProvider: React.FC<ProviderProps> = ({children}) => {

//     const dispatch = useDispatch();
//     const handleSetCampaigns =(campaigns: Campaign[])=> {
//         dispatch(setCampaigns(campaigns));
//     }
    

//     const campaigns = useSelector((state: RootState) => state.campaigns.campaigns);

//     React.useEffect(() => {
        
//             (async()=> {
//                 const data = await getCampaigns();
//                 console.log(data.data.campaigns)
//                 if (data.error) {
//                     // setNotification({message: data.message, severity: 'error'})
//                     return
//                 }
//                 handleSetCampaigns(data.data.campaigns);
              
//             }
//             )();

        
      
//     }, []);


//     return (
//         <CampaignsContext.Provider 
//             value={{
//                 campaigns: campaigns, 
//                 setCampaigns:  handleSetCampaigns
//             }}>
//             {children}
//         </CampaignsContext.Provider>
//     )
// }

export {}

