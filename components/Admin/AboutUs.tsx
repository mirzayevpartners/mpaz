import { Datagrid, List, TextField, Edit, SimpleForm, Create, ImageInput, ImageField } from 'react-admin';
import RichInput from '@/components/Admin/RichInput';
import GridWrapper from '@/components/Admin/GridWrapper';

export const AboutUsList = () => (
  <List>
    <Datagrid bulkActionButtons={false} rowClick="edit">
      <ImageField source={'image.src'} label={'Şəkil'} />
      <TextField source={'text'} label={'Mətn'} />
      {/*<BooleanField label={'Aktiv'} source="active" />*/}
    </Datagrid>
  </List>
);

export const AboutUsEdit = () => (
  <Edit>
    <SimpleForm>
      <ImageInput source="image" label="Şəkil">
        <ImageField source="src" title="Gallery image" />
      </ImageInput>
      <RichInput source={'text'} label={'Mətn'} />
      {/*<BooleanInput label={'Aktiv'} source="active" />*/}
    </SimpleForm>
  </Edit>
);

export const AboutUsCreate = () => (
  <Create>
    <SimpleForm>
      <ImageInput source="image" label="Şəkil">
        <ImageField source="src" title="Gallery image" />
      </ImageInput>
      <GridWrapper>
        <RichInput source={'text.az'} label={'Mətn(Az)'} />
        <RichInput source={'text.en'} label={'Mətn(En)'} />
        <RichInput source={'text.ru'} label={'Mətn(Ru)'} />
      </GridWrapper>
      {/*<BooleanInput label={'Aktiv'} source="active" />*/}
    </SimpleForm>
  </Create>
);
