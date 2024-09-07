import { Datagrid, List, TextField, Edit, SimpleForm, TextInput, Create, SelectField, SelectInput } from 'react-admin';

export const StarQuoteList = () => (
  <List>
    <Datagrid bulkActionButtons={false} rowClick="edit">
      <TextField source={'text.az'} label={'Mətn(Az)'} />
      <TextField source={'text.en'} label={'Mətn(En)'} />
      <TextField source={'text.ru'} label={'Mətn(Ru)'} />
    </Datagrid>
  </List>
);

export const StarQuoteEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source={'text.az'} label={'Mətn(Az)'} />
      <TextInput source={'text.en'} label={'Mətn(En)'} />
      <TextInput source={'text.ru'} label={'Mətn(Ru)'} />
    </SimpleForm>
  </Edit>
);

export const StarQuoteCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source={'text.az'} label={'Mətn(Az)'} />
      <TextInput source={'text.en'} label={'Mətn(En)'} />
      <TextInput source={'text.ru'} label={'Mətn(Ru)'} />
    </SimpleForm>
  </Create>
);
