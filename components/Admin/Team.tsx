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

export const TeamList = () => (
  <List>
    <Datagrid bulkActionButtons={false} rowClick="edit">
      <TextField label={'Ad Soyad'} source="fullName" />
      <TextField label={'Email'} source="email" />
      <TextField label={'Peşə'} source="profession" />
      <BooleanField label={'Aktiv'} source="active" />
    </Datagrid>
  </List>
);

export const TeamEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput label={'Ad Soyad'} required source="fullName" />
      <TextInput label={'Email'} required source="email" />
      <TextInput label={'Peşə'} required source="profession" />
      <ImageInput source="photo" label="Şəkil">
        <ImageField source="src" title="photo" />
      </ImageInput>
      <BooleanInput label={'Aktiv'} source="active" />
    </SimpleForm>
  </Edit>
);

export const TeamCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput label={'Ad Soyad'} required source="fullName" />
      <TextInput label={'Email'} required source="email" />
      <TextInput label={'Peşə'} required source="profession" />
      <ImageInput source="photo" label="Şəkil">
        <ImageField source="src" title="photo" />
      </ImageInput>
      <BooleanInput label={'Aktiv'} source="active" />
    </SimpleForm>
  </Create>
);
