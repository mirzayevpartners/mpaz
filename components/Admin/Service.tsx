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
} from 'react-admin';
import RichInput from '@/components/Admin/RichInput';

export const ServiceList = () => (
  <List>
    <Datagrid bulkActionButtons={false} rowClick="edit">
      <TextField label={'Başlıq'} source="title" />
      <TextField label={'Açıqlama'} source="description" />
      <BooleanField label={'Aktiv'} source="active" />
    </Datagrid>
  </List>
);

export const ServiceEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput label={'Başlıq'} required source="title" />
      <TextInput label={'Açıqlama'} required source="description" />
      <ImageInput source="icon" label="Ikon">
        <ImageField source="src" title="icon" />
      </ImageInput>
      <BooleanInput label={'Aktiv'} source="active" />
    </SimpleForm>
  </Edit>
);

export const ServiceCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput label={'Başlıq'} required source="title" />
      <TextInput label={'Açıqlama'} required source="description" />
      <ImageInput source="icon" label="Ikon">
        <ImageField source="src" title="icon" />
      </ImageInput>
      <BooleanInput label={'Aktiv'} source="active" />
    </SimpleForm>
  </Create>
);
