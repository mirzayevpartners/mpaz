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
} from 'react-admin';
import GridWrapper from '@/components/Admin/GridWrapper';

export const TeamList = () => (
  <List>
    <Datagrid bulkActionButtons={false} rowClick="edit">
      <TextField label={'Ad Soyad(Az)'} source="fullName.az" />
      <TextField label={'Peşə(Az)'} source="profession.az" />
      <TextField label={'Email'} source="email" />
      <BooleanField label={'Aktiv'} source="active" />
    </Datagrid>
  </List>
);

export const TeamEdit = () => (
  <Edit>
    <SimpleForm>
      <GridWrapper>
        <TextInput label={'Ad Soyad(Az)'} required source="fullName.az" />
        <TextInput label={'Ad Soyad(En)'} required source="fullName.en" />
        <TextInput label={'Ad Soyad(Ru)'} required source="fullName.ru" />
      </GridWrapper>
      <GridWrapper>
        <TextInput label={'Peşə(Az)'} required source="profession.az" />
        <TextInput label={'Peşə(En)'} required source="profession.en" />
        <TextInput label={'Peşə(Ru)'} required source="profession.ru" />
      </GridWrapper>
      <TextInput label={'Email'} required source="email" />
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
      <GridWrapper>
        <TextInput label={'Ad Soyad(Az)'} required source="fullName.az" />
        <TextInput label={'Ad Soyad(En)'} required source="fullName.en" />
        <TextInput label={'Ad Soyad(Ru)'} required source="fullName.ru" />
      </GridWrapper>
      <GridWrapper>
        <TextInput label={'Peşə(Az)'} required source="profession.az" />
        <TextInput label={'Peşə(En)'} required source="profession.en" />
        <TextInput label={'Peşə(Ru)'} required source="profession.ru" />
      </GridWrapper>
      <TextInput label={'Email'} required source="email" />
      <ImageInput source="photo" label="Şəkil">
        <ImageField source="src" title="photo" />
      </ImageInput>
      <BooleanInput label={'Aktiv'} source="active" />
    </SimpleForm>
  </Create>
);
