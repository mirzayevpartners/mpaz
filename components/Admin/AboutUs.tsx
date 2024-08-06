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

export const AboutUsList = () => (
  <List>
    <Datagrid bulkActionButtons={false} rowClick="edit">
      <ImageField source={'image.src'} label={'Şəkil'} />
      <TextField source={'text'} label={'Mətn'} />
      {/*<BooleanField label={'Aktiv'} source="active" />*/}
    </Datagrid>
  </List>
);

export const AboutUsEdit = () => (
  <Edit>
    <SimpleForm>
      <ImageInput source="image" label="Şəkil">
        <ImageField source="src" title="Gallery image" />
      </ImageInput>
      <RichInput source={'text'} label={'Mətn'} />
      {/*<BooleanInput label={'Aktiv'} source="active" />*/}
    </SimpleForm>
  </Edit>
);

export const AboutUsCreate = () => (
  <Create>
    <SimpleForm>
      <ImageInput source="image" label="Şəkil">
        <ImageField source="src" title="Gallery image" />
      </ImageInput>
      <RichInput source={'text'} label={'Mətn'} />
      {/*<BooleanInput label={'Aktiv'} source="active" />*/}
    </SimpleForm>
  </Create>
);
