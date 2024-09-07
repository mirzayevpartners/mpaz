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
import GridWrapper from '@/components/Admin/GridWrapper';

export const ServiceList = () => (
  <List>
    <Datagrid bulkActionButtons={false} rowClick="edit">
      <TextField label={'Başlıq(Az)'} source="title.az" />
      <TextField source={'slug'} label={'Link'} />
      {/*<TextField label={'Açıqlama(Az)'} source="description.az" />*/}
      <BooleanField label={'Aktiv'} source="active" />
    </Datagrid>
  </List>
);

export const ServiceEdit = () => (
  <Edit>
    <SimpleForm>
      <GridWrapper>
        <TextInput label={'Başlıq(Az)'} required source="title.az" />
        <TextInput label={'Başlıq(En)'} required source="title.en" />
        <TextInput label={'Başlıq(Ru)'} required source="title.ru" />
      </GridWrapper>
      <TextInput label={'Link'} source={'slug'} />
      <GridWrapper>
        <RichInput label={'Açıqlama(Az)'} required source="description.az" />
        <RichInput label={'Açıqlama(En)'} required source="description.en" />
        <RichInput label={'Açıqlama(Ru)'} required source="description.ru" />
      </GridWrapper>
      {/*<ImageInput source="icon" label="Ikon">*/}
      {/*  <ImageField source="src" title="icon" />*/}
      {/*</ImageInput>*/}
      <BooleanInput label={'Aktiv'} source="active" />
    </SimpleForm>
  </Edit>
);

export const ServiceCreate = () => (
  <Create>
    <SimpleForm>
      <GridWrapper>
        <TextInput label={'Başlıq(Az)'} required source="title.az" />
        <TextInput label={'Başlıq(En)'} required source="title.en" />
        <TextInput label={'Başlıq(Ru)'} required source="title.ru" />
      </GridWrapper>
      <TextInput label={'Link'} source={'slug'} />
      <GridWrapper>
        <RichInput label={'Açıqlama(Az)'} required source="description.az" />
        <RichInput label={'Açıqlama(En)'} required source="description.en" />
        <RichInput label={'Açıqlama(Ru)'} required source="description.ru" />
      </GridWrapper>
      {/*<ImageInput source="icon" label="Ikon">*/}
      {/*  <ImageField source="src" title="icon" />*/}
      {/*</ImageInput>*/}
      <BooleanInput label={'Aktiv'} source="active" />
    </SimpleForm>
  </Create>
);
