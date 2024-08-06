import {
  Datagrid,
  List,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  ImageInput,
  ImageField,
  BooleanField,
  BooleanInput,
  NumberField,
  NumberInput,
} from 'react-admin';

export const TestimonialList = () => (
  <List>
    <Datagrid bulkActionButtons={false} rowClick="edit">
      <TextField label={'Ad Soyad'} source="fullName" />
      <TextField label={'Başlıq'} source="title" />
      <TextField label={'Fikir'} source="text" />
      <NumberField source={'rating'} label={'Reytinq'} />
      <BooleanField label={'Aktiv'} source="active" />
    </Datagrid>
  </List>
);

export const TestimonialEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput label={'Ad Soyad'} required source="fullName" />
      <TextInput label={'Başlıq'} required source="title" />
      <TextInput label={'Fikir'} required source="text" />
      <NumberInput min={0} max={5} source={'rating'} label={'Reytinq'} />
      <ImageInput source="photo" label="Şəkil">
        <ImageField source="src" title="photo" />
      </ImageInput>
      <BooleanInput label={'Aktiv'} source="active" />
    </SimpleForm>
  </Edit>
);

export const TestimonialCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput label={'Ad Soyad'} required source="fullName" />
      <TextInput label={'Başlıq'} required source="title" />
      <TextInput label={'Fikir'} required source="text" />
      <NumberInput min={0} max={5} source={'rating'} label={'Reytinq'} />
      <ImageInput source="photo" label="Şəkil">
        <ImageField source="src" title="photo" />
      </ImageInput>
      <BooleanInput label={'Aktiv'} source="active" />
    </SimpleForm>
  </Create>
);
