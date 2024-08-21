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
import GridWrapper from '@/components/Admin/GridWrapper';

export const ActiveWorksList = () => (
  <List>
    <Datagrid bulkActionButtons={false} rowClick="edit">
      <TextField source={'title.az'} label={'Başlıq(Az)'} />
      <TextField source={'number'} label={'Say'} />
      <ImageField source={'icon.src'} label={'Ikon'} />
    </Datagrid>
  </List>
);

export const ActiveWorksEdit = () => (
  <Edit>
    <SimpleForm>
      <GridWrapper>
        <TextInput source={'title.az'} label={'Başlıq(Az)'} />
        <TextInput source={'title.en'} label={'Başlıq(En)'} />
        <TextInput source={'title.ru'} label={'Başlıq(Ru)'} />
      </GridWrapper>
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
      <GridWrapper>
        <TextInput source={'title.az'} label={'Başlıq(Az)'} />
        <TextInput source={'title.en'} label={'Başlıq(En)'} />
        <TextInput source={'title.ru'} label={'Başlıq(Ru)'} />
      </GridWrapper>
      <TextInput source={'number'} label={'Say'} />
      <ImageInput source="icon" label="Ikon">
        <ImageField source="src" title="Gallery image" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
