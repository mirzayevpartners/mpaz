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
  ArrayInput,
  SimpleFormIterator,
} from 'react-admin';
import RichInput from '@/components/Admin/RichInput';
import GridWrapper from '@/components/Admin/GridWrapper';

export const GalleryList = () => (
  <List>
    <Datagrid bulkActionButtons={false} rowClick="edit">
      <TextField label={'Başlıq(Az)'} source="title.az" />
      <DateField source={'customDate'} label="Tarix" />
      <BooleanField label={'Aktiv'} source="active" />
    </Datagrid>
  </List>
);

export const GalleryEdit = () => (
  <Edit>
    <SimpleForm>
      <GridWrapper>
        <TextInput label={'Başlıq(Az)'} required source="title.az" />
        <TextInput label={'Başlıq(En)'} required source="title.en" />
        <TextInput label={'Başlıq(Ru)'} required source="title.ru" />
      </GridWrapper>
      <DateInput source={'customDate'} label={'Tarix'} />
      <ImageInput multiple={true} source="images" label="Şəkillər">
        <ImageField source="src" title="Gallery image" />
      </ImageInput>
      <BooleanInput label={'Aktiv'} source="active" />
    </SimpleForm>
  </Edit>
);

export const GalleryCreate = () => (
  <Create>
    <SimpleForm>
      <GridWrapper>
        <TextInput label={'Başlıq(Az)'} required source="title.az" />
        <TextInput label={'Başlıq(En)'} required source="title.en" />
        <TextInput label={'Başlıq(Ru)'} required source="title.ru" />
      </GridWrapper>
      <DateInput source={'customDate'} label={'Tarix'} />
      <ImageInput multiple={true} source="images" label="Şəkillər">
        <ImageField source="src" title="Gallery image" />
      </ImageInput>
      <BooleanInput label={'Aktiv'} source="active" />
    </SimpleForm>
  </Create>
);
