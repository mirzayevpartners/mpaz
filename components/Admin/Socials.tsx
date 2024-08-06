import { Datagrid, List, TextField, Edit, SimpleForm, TextInput, Create, SelectField, SelectInput } from 'react-admin';

const socials = [
  { id: 'facebook', name: 'Facebook' },
  { id: 'twitter', name: 'Twitter' },
  { id: 'instagram', name: 'Instagram' },
  { id: 'youtube', name: 'Youtube' },
  { id: 'linkedin', name: 'Linkedin' },
  { id: 'whatsapp', name: 'Whatsapp' },
];

export const SocialsList = () => (
  <List>
    <Datagrid bulkActionButtons={false} rowClick="edit">
      {/*<TextField label={'Sosial Şəbəkə Başlıq'} source="title" />*/}
      <SelectField label={'Sosial Şəbəkə Başlıq'} source={'title'} choices={socials} />
      <TextField label={'Link'} source="link" />
    </Datagrid>
  </List>
);

export const SocialsEdit = () => (
  <Edit>
    <SimpleForm>
      {/*<TextInput label={'Sosial Şəbəkə Başlıq'} required source="title" />*/}
      <SelectInput label={'Sosial Şəbəkə Başlıq'} source={'title'} choices={socials} />
      <TextInput label={'Link'} required source="link" />
    </SimpleForm>
  </Edit>
);

export const SocialsCreate = () => (
  <Create>
    <SimpleForm>
      {/*<TextInput label={'Sosial Şəbəkə Başlıq'} required source="title" />*/}
      <SelectInput label={'Sosial Şəbəkə Başlıq'} source={'title'} choices={socials} />
      <TextInput label={'Link'} required source="link" />
    </SimpleForm>
  </Create>
);
