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

const VideoField = (props: any) => {
  const record = useRecordContext(props);
  return <video src={`${record?.src}`} controls width="320" height="240"></video>;
};

export const VideoList = () => (
  <List>
    <Datagrid bulkActionButtons={false} rowClick="edit">
      <TextField label={'Başlıq'} source="title" />
      <DateField source={'customDate'} label="Tarix" />
      <BooleanField label={'Aktiv'} source="active" />
    </Datagrid>
  </List>
);

export const VideoEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput label={'Başlıq'} required source="title" />
      <DateInput source={'customDate'} label={'Tarix'} />
      {/*<FileInput multiple={true} source="videos">*/}
      {/*  <VideoField src={'src'} />*/}
      {/*</FileInput>*/}
      <ArrayInput label={'Video linkləri(Youtube)'} source={'videos'}>
        <SimpleFormIterator>
          <TextInput source={'src'} label={'Link'} />
          <TextInput source={'title'} label={'Başlıq'} />
        </SimpleFormIterator>
      </ArrayInput>
      <BooleanInput label={'Aktiv'} source="active" />
    </SimpleForm>
  </Edit>
);

export const VideoCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput label={'Başlıq'} required source="title" />
      <DateInput source={'customDate'} label={'Tarix'} />
      {/*<FileInput multiple={true} source="videos">*/}
      {/*  <VideoField src={'src'} />*/}
      {/*</FileInput>*/}
      <ArrayInput label={'Video linkləri(Youtube)'} source={'videos'}>
        <SimpleFormIterator>
          <TextInput source={'src'} label={'Link'} />
          <TextInput source={'title'} label={'Başlıq'} />
        </SimpleFormIterator>
      </ArrayInput>
      <BooleanInput label={'Aktiv'} source="active" />
    </SimpleForm>
  </Create>
);
