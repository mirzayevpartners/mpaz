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

const NewsContentShow = () => {
  const record = useRecordContext();
  // @ts-expect-error content is not defined in type
  record.content = record.content.length > 100 ? `${record.content.slice(0, 100)}...` : record.content;
  return <RichTextField label={'Kontent'} source="content" record={record} />;
};
export const NewsList = () => (
  <List>
    <Datagrid bulkActionButtons={false} rowClick="edit">
      <TextField label={'Başlıq'} source="title" />
      <TextField label={'Link'} source="slug" />
      <TextField label={'Link Başlıq'} source="slugTitle" />
      <NewsContentShow />
      {/*<RichTextField source="content" />*/}
      <BooleanField label={'Aktiv'} source="active" />
    </Datagrid>
  </List>
);

export const NewsEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput label={'Başlıq'} required source="title" />
      <TextInput label={'Link'} required source="slug" />
      <TextInput label={'Link Başlıq'} required source="slugTitle" />
      <RichInput label={'Kontent'} source="content" />
      <ImageInput source="mainImage" label="Main image">
        <ImageField source="src" title="New image" />
      </ImageInput>
      <ImageInput multiple={true} source="images" label="Images">
        <ImageField source="src" title="New image" />
      </ImageInput>
      <BooleanInput label={'Aktiv'} source="active" />
    </SimpleForm>
  </Edit>
);

export const NewsCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput label={'Başlıq'} required source="title" />
      <TextInput label={'Link'} required source="slug" />
      <TextInput label={'Link Başlıq'} required source="slugTitle" />
      {/*<TextInput required source="content" />*/}
      <RichInput label={'Kontent'} source="content" label="Content" />
      <ImageInput source="mainImage" label="Main image">
        <ImageField source="src" title="New image" />
      </ImageInput>
      <ImageInput multiple={true} source="images" label="Images">
        <ImageField source="src" title="New image" />
      </ImageInput>
      <BooleanInput label={'Aktiv'} source="active" />
    </SimpleForm>
  </Create>
);
