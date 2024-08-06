import {
  CreateButton,
  DatagridConfigurable,
  ExportButton,
  FilterButton,
  List,
  SelectColumnsButton,
  TopToolbar,
} from 'react-admin';
import IconEvent from '@mui/icons-material/Event';
export const ListActions = () => (
  <TopToolbar>
    {' '}
    {/*<SelectColumnsButton />*/}
    {/*<FilterButton />*/}
    {/*<CreateButton />*/}
    <ExportButton />{' '}
  </TopToolbar>
);
