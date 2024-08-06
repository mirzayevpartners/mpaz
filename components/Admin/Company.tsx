import {
  Datagrid,
  EmailField,
  List,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  useRecordContext,
  ImageInput,
  ImageField,
  BooleanField,
  BooleanInput,
  RichTextField,
  DateField,
  DateInput,
} from 'react-admin';
import RichInput from '@/components/Admin/RichInput';

export const CompanyList = () => (
  <List>
    <Datagrid bulkActionButtons={false} rowClick="edit">
      <ImageField source={'image.src'} label={'Şəkil'} />
      <BooleanField label={'Aktiv'} source="active" />
    </Datagrid>
  </List>
);

export const CompanyEdit = () => (
  <Edit>
    <SimpleForm>
      <ImageInput source="image" label="Şəkil">
        <ImageField source="src" title="Gallery image" />
      </ImageInput>
      <BooleanInput label={'Aktiv'} source="active" />
    </SimpleForm>
  </Edit>
);

export const CompanyCreate = () => (
  <Create>
    <SimpleForm>
      <ImageInput source="image" label="Şəkil">
        <ImageField source="src" title="Gallery image" />
      </ImageInput>
      <BooleanInput label={'Aktiv'} source="active" />
    </SimpleForm>
  </Create>
);
