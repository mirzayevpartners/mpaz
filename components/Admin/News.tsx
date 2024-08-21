import {
  Datagrid,
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
import GridWrapper from '@/components/Admin/GridWrapper';

// const NewsContentShow = () => {
//   const record = useRecordContext();
//   // @ts-expect-error content is not defined in type
//   record.content = record.content.length > 50 ? `${record.content.slice(0, 50)}...` : record.content;
//   return <TextField label={'Kontent(Az)'} record={record} />;
// };
export const NewsList = () => (
  <List>
    <Datagrid bulkActionButtons={false} rowClick="edit">
      <TextField label={'Başlıq(Az)'} source="title.az" />
      <TextField label={'Link'} source="slug" />
      <TextField label={'Link Başlıq(Az)'} source="slugTitle.az" />
      {/*<RichTextField source="content" />*/}
      <BooleanField label={'Aktiv'} source="active" />
    </Datagrid>
  </List>
);

export const NewsEdit = () => (
  <Edit>
    <SimpleForm>
      <GridWrapper>
        <TextInput label={'Başlıq(Az)'} required source="title.az" />
        <TextInput label={'Başlıq(En)'} required source="title.en" />
        <TextInput label={'Başlıq(Ru)'} required source="title.ru" />
      </GridWrapper>
      <TextInput label={'Link'} required source="slug" />
      <GridWrapper>
        <TextInput label={'Link Başlıq(Az)'} required source="slugTitle.az" />
        <TextInput label={'Link Başlıq(En)'} required source="slugTitle.en" />
        <TextInput label={'Link Başlıq(Ru)'} required source="slugTitle.ru" />
      </GridWrapper>
      <GridWrapper>
        <RichInput label={'Kontent(Az)'} source="content.az" />
        <RichInput label={'Kontent(En)'} source="content.en" />
        <RichInput label={'Kontent(Ru)'} source="content.ru" />
      </GridWrapper>
      <ImageInput source="mainImage" label="Qapaq şəkli">
        <ImageField source="src" title="New image" />
      </ImageInput>
      <ImageInput multiple={true} source="images" label="Bütün şəkillər">
        <ImageField source="src" title="New image" />
      </ImageInput>
      <BooleanInput label={'Aktiv'} source="active" />
    </SimpleForm>
  </Edit>
);

export const NewsCreate = () => (
  <Create>
    <SimpleForm>
      <GridWrapper>
        <TextInput label={'Başlıq(Az)'} required source="title.az" />
        <TextInput label={'Başlıq(En)'} required source="title.en" />
        <TextInput label={'Başlıq(Ru)'} required source="title.ru" />
      </GridWrapper>
      <TextInput label={'Link'} required source="slug" />
      <GridWrapper>
        <TextInput label={'Link Başlıq(Az)'} required source="slugTitle.az" />
        <TextInput label={'Link Başlıq(En)'} required source="slugTitle.en" />
        <TextInput label={'Link Başlıq(Ru)'} required source="slugTitle.ru" />
      </GridWrapper>
      <GridWrapper>
        <RichInput label={'Kontent(Az)'} source="content.az" />
        <RichInput label={'Kontent(En)'} source="content.en" />
        <RichInput label={'Kontent(Ru)'} source="content.ru" />
      </GridWrapper>
      <ImageInput source="mainImage" label="Qapaq şəkli">
        <ImageField source="src" title="New image" />
      </ImageInput>
      <ImageInput multiple={true} source="images" label="Bütün şəkillər">
        <ImageField source="src" title="New image" />
      </ImageInput>
      <BooleanInput label={'Aktiv'} source="active" />
    </SimpleForm>
  </Create>
);
