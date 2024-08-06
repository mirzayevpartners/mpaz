import {
  Datagrid,
  List,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  BooleanField,
  BooleanInput,
} from 'react-admin';
import { ListActions } from '@/components/Admin/ListActions';

export const QuestionList = () => (
  <List>
    <Datagrid bulkActionButtons={false} rowClick="edit">
      <TextField label={'Sual'} source="question" />
      <TextField label={'Cavab'} source="answer" />
      <BooleanField label={'Aktiv'} source="active" />
    </Datagrid>
  </List>
);

export const QuestionEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput multiline={true} label={'Sual'} required source="question" />
      <TextInput multiline={true} label={'Cavab'} required source="answer" />
      <BooleanInput label={'Aktiv'} source="active" />
    </SimpleForm>
  </Edit>
);

export const QuestionCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput multiline={true} label={'Sual'} required source="question" />
      <TextInput multiline={true} label={'Cavab'} required source="answer" />
      <BooleanInput label={'Aktiv'} source="active" />
    </SimpleForm>
  </Create>
);
