import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export function RowPlaceHolder() {
  return (
    <Stack spacing={1} direction={'row'}>
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rectangular" width={210} height={60} />
    </Stack>
  );
}

export function ColumnPlaceHolder() {
    return (
      <Stack spacing={1} direction={'column'}>
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rectangular" width={210} height={60} />
      </Stack>
    );
  }