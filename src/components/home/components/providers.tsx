import { useContext } from "react";
import { CampaignsContext, ProvidersContext } from "../../../contexts/home";
import { Box } from "@mui/system";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";


export default function Component() {
    const {providers, selectProvider, selectedProvider} = useContext(ProvidersContext);
    return (
        <Box sx={{ minWidth: 275 }} margin={'10px'}>
            <Box sx={{display: 'flex', justifyContent: '', flexWrap: 'wrap', border: "1px solid black"}}>
                {providers && providers.map((provider, index) => {
                    return (
                        <FormControlLabel 
                            key={index}
                            id={provider.provider}
                            control={<Checkbox  
                                id={provider.provider}
                                checked={ selectedProvider === provider.provider}
                                onChange={(e) =>{selectProvider(e.target.id)}}
                                sx={{color: 'primary.main'}}
                            />} 
                            label={
                            <Typography variant={'h6'}>
                                {provider.provider}
                            </Typography>
                            } 
                        />
                    )
                })}
            </Box>
        </Box>
    );
}