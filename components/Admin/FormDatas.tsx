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
  DateField,
} from 'react-admin';
import GridWrapper from '@/components/Admin/GridWrapper';

export const FormDatasList = () => (
  <List>
    <Datagrid bulkActionButtons={false} rowClick="edit">
      <TextField label={'Ad Soyad'} source="fullName" />
      <TextField label={'Telefon'} source="phoneNumber" />
      <TextField label={'Email'} source="emailAddress" />
      <DateField label={'Tarix'} source="customDate" />
      <BooleanField label={'İlk dəfə'} source="firstTime" />
    </Datagrid>
  </List>
);

export const FormDatasEdit = () => (
  <Edit>
    <SimpleForm>
      <div className={'text-lg flex flex-row gap-x-3 items-center'}>
        <p>Ad Soyad:</p>
        <TextField label={'Ad Soyad'} source="fullName" />
      </div>
      <div className={'text-lg flex flex-row gap-x-3 items-center'}>
        <p>Telefon:</p>
        <TextField label={'Telefon'} source="phoneNumber" />
      </div>
      <div className={'text-lg flex flex-row gap-x-3 items-center'}>
        <p>Email:</p>
        <TextField label={'Email'} source="emailAddress" />
      </div>
      <div className={'text-lg flex flex-row gap-x-3 items-center'}>
        <p>Ilk Dəfə:</p>
        <BooleanField label={'İlk dəfə'} source="firstTime" />
      </div>
    </SimpleForm>
  </Edit>
);
//
// export const FormDatasCreate = () => (
//   <Create>
//     <SimpleForm>
//       <GridWrapper>
//         <TextInput multiline={true} label={'Sual(Az)'} required source="question.az" />
//         <TextInput multiline={true} label={'Sual(En)'} required source="question.en" />
//         <TextInput multiline={true} label={'Sual(Ru)'} required source="question.ru" />
//       </GridWrapper>
//       <GridWrapper>
//         <TextInput multiline={true} label={'Cavab(Az)'} required source="answer.az" />
//         <TextInput multiline={true} label={'Cavab(En)'} required source="answer.en" />
//         <TextInput multiline={true} label={'Cavab(Ru)'} required source="answer.ru" />
//       </GridWrapper>
//       <BooleanInput label={'Aktiv'} source="active" />
//     </SimpleForm>
//   </Create>
// );
