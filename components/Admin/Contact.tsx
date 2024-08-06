import {
  Datagrid,
  List,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  ImageField,
  ImageInput,
  SelectField,
  SelectInput,
} from 'react-admin';

const contacts = [
  { id: 'address', name: 'Ünvan' },
  { id: 'phone', name: 'Telefon' },
  { id: 'email', name: 'Elektron əlaqə' },
];

export const ContactList = () => (
  <List>
    <Datagrid bulkActionButtons={false} rowClick="edit">
      {/*<TextField label={'Başlıq'} source="key" />*/}
      <SelectField label={'Başlıq'} source={'key'} choices={contacts} />
      <TextField label={'Tekst'} source="value" />
      <ImageField label={'Ikon'} source={'icon.src'} />
    </Datagrid>
  </List>
);

export const ContactEdit = () => (
  <Edit>
    <SimpleForm>
      {/*<TextInput label={'Başlıq'} required source="key" />*/}
      <SelectInput label={'Başlıq'} source={'key'} choices={contacts} />
      <TextInput label={'Tekst'} required source="value" />
      <ImageInput isRequired={true} source={'icon'}>
        <ImageField source={'src'} title={'Ikon'} />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export const ContactCreate = () => (
  <Create>
    <SimpleForm>
      {/*<TextInput label={'Başlıq'} required source="key" />*/}
      <SelectInput label={'Başlıq'} source={'key'} choices={contacts} />
      <TextInput label={'Tekst'} required source="value" />
      <ImageInput isRequired={true} source={'icon'}>
        <ImageField source={'src'} title={'Ikon'} />
      </ImageInput>
    </SimpleForm>
  </Create>
);
