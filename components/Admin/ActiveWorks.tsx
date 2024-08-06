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

export const ActiveWorksList = () => (
  <List>
    <Datagrid bulkActionButtons={false} rowClick="edit">
      <TextField source={'title'} label={'Başlıq'} />
      <TextField source={'number'} label={'Say'} />
      <ImageField source={'icon.src'} label={'Ikon'} />
    </Datagrid>
  </List>
);

export const ActiveWorksEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source={'title'} label={'Başlıq'} />
      <TextInput source={'number'} label={'Say'} />
      <ImageInput source="icon" label="Ikon">
        <ImageField source="src" title="Gallery image" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export const ActiveWorksCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source={'title'} label={'Başlıq'} />
      <TextInput source={'number'} label={'Say'} />
      <ImageInput source="icon" label="Ikon">
        <ImageField source="src" title="Gallery image" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
