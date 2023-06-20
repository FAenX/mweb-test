import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useContext } from 'react';
import { CampaignsContext } from '../../../contexts/home';
import {RowPlaceHolder} from './common/placeHolders'




export default function Campaigns() {
    const {campaigns, selectCampaign, selectedCampaign} = useContext(CampaignsContext);
    return (
        <Box sx={{ minWidth: 275 }} margin={'5px'}>
            {(campaigns.length > 0 && <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                {campaigns.map((campaign, index) => {
                    return (
                        <FormControlLabel 
                            key={index}
                            id={campaign.code}
                            control={<Checkbox  
                                id={campaign.code}
                                checked={selectedCampaign === campaign.code}
                                onChange={(e) =>{selectCampaign(e.target.id)}}
                                sx={{color: 'primary.main'}}
                            />} 
                            label={
                            <Typography variant={'h6'} sx={{fontWeight: "300"}}>
                                {campaign.name}
                            </Typography>
                            } 
                        />
                    )
                })} 
            </Box>) || <RowPlaceHolder/>}
        </Box>
    );
}