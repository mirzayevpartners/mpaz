import {
  Datagrid,
  List,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  useRecordContext,
  BooleanField,
  BooleanInput,
  DateField,
  DateInput,
  FileInput,
  ArrayInput,
  SimpleFormIterator,
} from 'react-admin';
import GridWrapper from '@/components/Admin/GridWrapper';

const VideoField = (props: any) => {
  const record = useRecordContext(props);
  return <video src={`${record?.src}`} controls width="320" height="240"></video>;
};

export const VideoList = () => (
  <List>
    <Datagrid bulkActionButtons={false} rowClick="edit">
      <TextField label={'Başlıq(Az)'} source="title.az" />
      <DateField source={'customDate'} label="Tarix" />
      <BooleanField label={'Aktiv'} source="active" />
    </Datagrid>
  </List>
);

export const VideoEdit = () => (
  <Edit>
    <SimpleForm>
      <GridWrapper>
        <TextInput label={'Başlıq(Az)'} required source="title.az" />
        <TextInput label={'Başlıq(En)'} required source="title.en" />
        <TextInput label={'Başlıq(Ru)'} required source="title.ru" />
      </GridWrapper>
      <DateInput source={'customDate'} label={'Tarix'} />
      {/*<FileInput multiple={true} source="videos">*/}
      {/*  <VideoField src={'src'} />*/}
      {/*</FileInput>*/}
      <ArrayInput label={'Video linkləri(Youtube)'} source={'videos'}>
        <SimpleFormIterator>
          <TextInput source={'src'} label={'Link'} />
          <TextInput source={'title.az'} label={'Video Başlıq(Az)'} />
          <TextInput source={'title.en'} label={'Video Başlıq(En)'} />
          <TextInput source={'title.ru'} label={'Video Başlıq(Ru)'} />
        </SimpleFormIterator>
      </ArrayInput>
      <BooleanInput label={'Aktiv'} source="active" />
    </SimpleForm>
  </Edit>
);

export const VideoCreate = () => (
  <Create>
    <SimpleForm>
      <GridWrapper>
        <TextInput label={'Başlıq(Az)'} required source="title.az" />
        <TextInput label={'Başlıq(En)'} required source="title.en" />
        <TextInput label={'Başlıq(Ru)'} required source="title.ru" />
      </GridWrapper>
      <DateInput source={'customDate'} label={'Tarix'} />
      {/*<FileInput multiple={true} source="videos">*/}
      {/*  <VideoField src={'src'} />*/}
      {/*</FileInput>*/}
      <ArrayInput label={'Video linkləri(Youtube)'} source={'videos'}>
        <SimpleFormIterator>
          <TextInput source={'src'} label={'Link'} />
          <TextInput source={'title.az'} label={'Video Başlıq(Az)'} />
          <TextInput source={'title.en'} label={'Video Başlıq(En)'} />
          <TextInput source={'title.ru'} label={'Video Başlıq(Ru)'} />
        </SimpleFormIterator>
      </ArrayInput>
      <BooleanInput label={'Aktiv'} source="active" />
    </SimpleForm>
  </Create>
);
