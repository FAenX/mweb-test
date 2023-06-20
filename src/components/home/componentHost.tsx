import { Campaigns, Providers, Products, PriceRanges } from "./components";
import Container from '@mui/material/Container';
import { Stack, Typography } from "@mui/material";




export default function ComponentHost  ()  {
    
    return (
        <Container sx={{minWidth: '90vw', padding: '15px', border: "1px solid black"}} >
            <Typography variant={'h6'} sx={{fontWeight: "bold"}}>Select Fibre Campaign</Typography>
            
            <Stack direction={'row'} flexWrap={'wrap'} sx={{margin: "20px"}}>
                <Campaigns />
            </Stack>

        <Typography variant={'h6'} sx={{fontWeight: "bold"}}>Fibre Providers</Typography>
        <Stack direction={'row'} flexWrap={'wrap'} sx={{margin: "20px"}}>
                <Providers />
            </Stack>
        
        <Typography variant={'h6'} sx={{fontWeight: "bold"}}>Price Ranges</Typography>
            <Stack direction={'row'} flexWrap={'wrap'} sx={{margin: "20px"}}>
                <PriceRanges />
            </Stack>
       

        <Typography variant={'h6'} sx={{fontWeight: "bold"}}>Products</Typography>
            <Stack direction={'row'} flexWrap={'wrap'} sx={{margin: "20px"}}>
                <Products />
            </Stack>
            
       
        </Container>
    );
}