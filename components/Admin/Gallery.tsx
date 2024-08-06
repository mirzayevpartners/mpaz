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

export const GalleryList = () => (
  <List>
    <Datagrid bulkActionButtons={false} rowClick="edit">
      <TextField label={'Başlıq'} source="title" />
      <DateField source={'customDate'} label="Tarix" />
      <BooleanField label={'Aktiv'} source="active" />
    </Datagrid>
  </List>
);

export const GalleryEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput label={'Başlıq'} required source="title" />
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
      <TextInput label={'Başlıq'} required source="title" />
      <DateInput source={'customDate'} label={'Tarix'} />
      <ImageInput multiple={true} source="images" label="Şəkillər">
        <ImageField source="src" title="Gallery image" />
      </ImageInput>
      <BooleanInput label={'Aktiv'} source="active" />
    </SimpleForm>
  </Create>
);
