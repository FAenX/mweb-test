import { Box, Stack, Typography } from "@mui/material";




export default function Component(){
    return (
        <Stack direction={'row'} spacing={2}>
            <Box sx={{border: "1px solid black", margin: '5px', padding: '5px'}}>
                <Typography variant={'h6'}>R0 - R1000</Typography>
            </Box>
            <Box sx={{border: "1px solid black", margin: '5px', padding: '5px'}}>
                <Typography variant={'h6'}>R1000 - R2000</Typography>
            </Box>
            <Box sx={{border: "1px solid black", margin: '5px', padding: '5px'}}>
                <Typography variant={'h6'}>R2000 - R3000</Typography>
            </Box>
        </Stack>
    );
}