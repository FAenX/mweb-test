import { Campaigns, Providers, Products, PriceRanges } from "./components";
import Container from '@mui/material/Container';
import { AppBar, Stack, Typography } from "@mui/material";




export default function ComponentHost  ()  {
    
    return (
        <Container sx={{minWidth: '90vw', padding: '100px'}} >

            <AppBar 
                sx={{height: '50px', display: 'flex', justifyContent: "center", padding: "15px"}} 
                position="fixed" color="inherit"
            >
                <Stack>
                    <Typography variant="h6" sx={{fontWeight: "300"}}>Campaigns</Typography>
                </Stack>
            </AppBar>


            <Typography variant={'h6'} sx={{fontWeight: "bold", margin: "20px"}}>Select Fibre Campaign</Typography>
            
            <Stack direction={'row'} flexWrap={'wrap'} >
                <Campaigns />
            </Stack>

            <Typography variant={'h6'} sx={{fontWeight: "bold", margin: "20px"}}>Fibre Providers</Typography>
            <Stack direction={'row'} flexWrap={'wrap'} >
                    <Providers />
                </Stack>
            
            <Typography variant={'h6'} sx={{fontWeight: "bold", margin: "20px"}}>Price Ranges</Typography>
                <Stack direction={'row'} flexWrap={'wrap'} >
                    <PriceRanges />
                </Stack>
        

            <Typography variant={'h6'} sx={{fontWeight: "bold", margin: "20px"}}>Products</Typography>
                <Stack direction={'row'} flexWrap={'wrap'} >
                    <Products />
                </Stack>
                
        
        </Container>
    );
}