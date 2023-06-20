import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export function RowPlaceHolder() {
  return (
    <Stack spacing={1} direction={'row'} flexWrap={'wrap'}>
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rectangular" width={210} height={60} />
    </Stack>
  );
}

export function ColumnPlaceHolder() {
    return (
      <Stack spacing={1} direction={'column'}>
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