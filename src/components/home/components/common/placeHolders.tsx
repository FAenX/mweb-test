import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export function RowPlaceHolder() {
  return (
    <Stack 
    // sx={{border: '1px solid black'}}
    // spacing={1} 
    direction={'row'} 
    flexWrap={'wrap'} 
    alignItems="flex-start" 
    justifyContent={"flex-start"} 
    alignContent={"flex-start"} 

    >
      <Skeleton variant="rectangular" width={210} height={60} sx={{margin: "5px"}}/>
      <Skeleton variant="rectangular" width={210} height={60} sx={{margin: "5px"}}/>
      <Skeleton variant="rectangular" width={210} height={60} sx={{margin: "5px"}}/>
    </Stack>
  );
}

export function ColumnPlaceHolder() {
    return (
      <Stack 
      spacing={1} 
      direction={'column'} 
      alignItems="flex-start" 
      justifyContent={"flex-start"} 
      alignContent={"center"} 
      // sx={{border: '1px solid black'}}
      >
        <Skeleton variant="rectangular" width={210} height={20} />
        <Skeleton variant="rectangular" width={250} height={20} />
        <Skeleton variant="rectangular" width={190} height={20} />
        <Skeleton variant="rectangular" width={200} height={20} />
        <Skeleton variant="rectangular" width={160} height={20} />
        <Skeleton variant="rectangular" width={250} height={20} />
        <Skeleton variant="rectangular" width={190} height={20} />
        <Skeleton variant="rectangular" width={200} height={20} />
        <Skeleton variant="rectangular" width={160} height={20} />
      </Stack>
    );
  }