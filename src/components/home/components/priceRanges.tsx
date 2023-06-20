import { Box, Checkbox, FormControlLabel, Stack, Typography } from "@mui/material";
import { PriceRangeContext } from "../../../contexts/home";
import { useContext } from "react";




export default function Component(){
    const {priceRange, setPriceRange} = useContext(PriceRangeContext);
    return (
        <Box sx={{display: "flex", flexDirection: "row"}}>
            <Stack sx={{border: "1px solid black", margin: '5px', padding: '5px'}}>
            <FormControlLabel 
                id='R0 - R699'
                control={<Checkbox  
                    id="R0 - R699"
                    checked={priceRange === 'R0 - R699'}
                    onChange={(e) => setPriceRange(e.target.id)}
                    sx={{color: 'primary.main'}}
                />}
                label={
                <Typography variant={'h6'}>R0 - R699</Typography>
                }
            />
            </Stack >
            <Stack  sx={{border: "1px solid black", margin: '5px', padding: '5px'}}>
            <FormControlLabel 
                id='R700 - R999'
                control={<Checkbox  
                    id="R700 - R999"
                    checked={priceRange === 'R700 - R999'}
                    onChange={(e) =>setPriceRange(e.target.id)}
                    sx={{color: 'primary.main'}}
                />}
                label={
                <Typography variant={'h6'}>R700 - R999</Typography>
                }
            />
            </Stack >
            <Stack  sx={{border: "1px solid black", margin: '5px', padding: '5px'}}>
            <FormControlLabel 
                id='R1000+'
                control={<Checkbox  
                    id="R1000+"
                    checked={priceRange === 'R1000+'}
                    onChange={(e) =>setPriceRange(e.target.id)}
                    sx={{color: 'primary.main'}}
                />}
                label={
                <Typography variant={'h6'}>R1000+</Typography>
                }
            />
            </Stack >
        </Box>
    );
}