import { Campaigns } from "./components";
import Container from '@mui/material/Container';
import { Stack, Typography } from "@mui/material";




export default function ComponentHost  ()  {
    
    return (
        <Container sx={{minWidth: '90vw', padding: '15px', border: "1px solid black"}} >
            <Typography variant={'h6'}>Select Fibre Campaign</Typography>
            
            <Stack direction={'row'} flexWrap={'wrap'}>
                <Campaigns />
            </Stack>

        <Typography variant={'h6'}>Fibre Providers</Typography>
        
        <Typography variant={'h6'}>Price Ranges</Typography>
       

        <Typography variant={'h6'}>Products</Typography>
       
        </Container>
    );
}