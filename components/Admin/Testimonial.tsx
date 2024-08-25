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
import GridWrapper from '@/components/Admin/GridWrapper';

export const TestimonialList = () => (
  <List>
    <Datagrid bulkActionButtons={false} rowClick="edit">
      <TextField label={'Ad Soyad(Az)'} source="fullName.az" />
      <TextField label={'Başlıq(Az)'} source="title.az" />
      <TextField label={'Fikir(Az)'} source="text.az" />
      <NumberField source={'rating'} label={'Reytinq'} />
      <BooleanField label={'Aktiv'} source="active" />
    </Datagrid>
  </List>
);

export const TestimonialEdit = () => (
  <Edit>
    <SimpleForm>
      <GridWrapper>
        <TextInput label={'Ad Soyad(Az)'} required source="fullName.az" />
        <TextInput label={'Ad Soyad(En)'} required source="fullName.en" />
        <TextInput label={'Ad Soyad(Ru)'} required source="fullName.ru" />
      </GridWrapper>
      <GridWrapper>
        <TextInput label={'Başlıq(Az)'} required source="title.az" />
        <TextInput label={'Başlıq(En)'} required source="title.en" />
        <TextInput label={'Başlıq(Ru)'} required source="title.ru" />
      </GridWrapper>
      <GridWrapper>
        <TextInput label={'Fikir(Az)'} required source="text.az" />
        <TextInput label={'Fikir(En)'} required source="text.en" />
        <TextInput label={'Fikir(Ru)'} required source="text.ru" />
      </GridWrapper>
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
      <GridWrapper>
        <TextInput label={'Ad Soyad(Az)'} required source="fullName.az" />
        <TextInput label={'Ad Soyad(En)'} required source="fullName.en" />
        <TextInput label={'Ad Soyad(Ru)'} required source="fullName.ru" />
      </GridWrapper>
      <GridWrapper>
        <TextInput label={'Başlıq(Az)'} required source="title.az" />
        <TextInput label={'Başlıq(En)'} required source="title.en" />
        <TextInput label={'Başlıq(Ru)'} required source="title.ru" />
      </GridWrapper>
      <GridWrapper>
        <TextInput label={'Fikir(Az)'} required source="text.az" />
        <TextInput label={'Fikir(En)'} required source="text.en" />
        <TextInput label={'Fikir(Ru)'} required source="text.ru" />
      </GridWrapper>
      <NumberInput min={0} max={5} source={'rating'} label={'Reytinq'} />
      <ImageInput source="photo" label="Şəkil">
        <ImageField source="src" title="photo" />
      </ImageInput>
      <BooleanInput label={'Aktiv'} source="active" />
    </SimpleForm>
  </Create>
);
