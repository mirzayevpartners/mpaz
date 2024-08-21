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
import GridWrapper from '@/components/Admin/GridWrapper';

export const QuestionList = () => (
  <List>
    <Datagrid bulkActionButtons={false} rowClick="edit">
      <TextField label={'Sual(Az)'} source="question.az" />
      <TextField label={'Cavab(Az)'} source="answer.az" />
      <BooleanField label={'Aktiv'} source="active" />
    </Datagrid>
  </List>
);

export const QuestionEdit = () => (
  <Edit>
    <SimpleForm>
      <GridWrapper>
        <TextInput multiline={true} label={'Sual(Az)'} required source="question.az" />
        <TextInput multiline={true} label={'Sual(En)'} required source="question.en" />
        <TextInput multiline={true} label={'Sual(Ru)'} required source="question.ru" />
      </GridWrapper>
      <GridWrapper>
        <TextInput multiline={true} label={'Cavab(Az)'} required source="answer.az" />
        <TextInput multiline={true} label={'Cavab(En)'} required source="answer.en" />
        <TextInput multiline={true} label={'Cavab(Ru)'} required source="answer.ru" />
      </GridWrapper>
      <BooleanInput label={'Aktiv'} source="active" />
    </SimpleForm>
  </Edit>
);

export const QuestionCreate = () => (
  <Create>
    <SimpleForm>
      <GridWrapper>
        <TextInput multiline={true} label={'Sual(Az)'} required source="question.az" />
        <TextInput multiline={true} label={'Sual(En)'} required source="question.en" />
        <TextInput multiline={true} label={'Sual(Ru)'} required source="question.ru" />
      </GridWrapper>
      <GridWrapper>
        <TextInput multiline={true} label={'Cavab(Az)'} required source="answer.az" />
        <TextInput multiline={true} label={'Cavab(En)'} required source="answer.en" />
        <TextInput multiline={true} label={'Cavab(Ru)'} required source="answer.ru" />
      </GridWrapper>
      <BooleanInput label={'Aktiv'} source="active" />
    </SimpleForm>
  </Create>
);
