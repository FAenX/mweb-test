import { useContext } from "react";
import { ProvidersContext } from "../../../contexts/home";
import { Box, Stack } from "@mui/system";
import { Avatar, Checkbox, FormControlLabel, Typography } from "@mui/material";
import {RowPlaceHolder} from './common/placeHolders'


const LOGOBASEURLFRAG = "https://www.mweb.co.za/media/images/providers/provider"

export function getLogoUrl(provider: string): string {
    const formatedProvider = provider.toLowerCase().replace(/\s/g, "-");
    const url = `${LOGOBASEURLFRAG}-${formatedProvider}.png`;
    return url;
  }


export default function Component() {
    const {providers, selectProvider, selectedProvider} = useContext(ProvidersContext);
    const unq = providers && providers.length > 0 && Array.from(new Set(providers.map(provider=>provider.provider)))
    return (
        <Box sx={{ minWidth: 275 }} margin={'10px'}>
            {(providers && providers.length > 0 && <Box sx={{display: 'flex', justifyContent: '', flexWrap: 'wrap'}}>
                {unq && unq.length > 0 && unq.map((provider, index) => {
                    return (
                        <FormControlLabel 
                            key={index}
                            id={provider}
                            control={<Checkbox  
                                id={provider}
                                checked={ selectedProvider === provider}
                                onChange={(e) =>{selectProvider(e.target.id)}}
                                sx={{color: 'primary.main'}}
                            />} 
                            label={
                                <Stack direction={'row'} justifyContent={'center'} spacing={1} alignContent={'center'} alignItems={'center'} >
                                    <Avatar 
                                        src={getLogoUrl(provider)} 
                                        sx={{width: '20px', height: '20px', bgcolor: 'white'}}
                                        alt={provider}
                                        variant={'square'}
                                    />

                                    <Typography variant={'h6'}>
                                        {provider}
                                    </Typography>
                                </Stack>
                            } 
                        />
                    )
                })}
            </Box>) || <RowPlaceHolder/>} 
        </Box>
    );
}