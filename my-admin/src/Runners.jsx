import { List,SelectInput, Datagrid, TextField, DateField, ImageField, Show, SimpleShowLayout,ReferenceField, SimpleForm, Edit, TextInput, EditButton } from 'react-admin';

export const RunnerList = () => (
    <List>
        <Datagrid>
            <TextField source="nickname" />
            <TextField source="decision" />
        </Datagrid>
    </List>
);

export const RunnerShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="nickname" />
            <TextField source="fav_drink" />
            <TextField source="stats" />
            <TextField source="caution" />
        </SimpleShowLayout>
    </Show>
);
export const RunnerEdit = () => (
    <Edit>
        <SimpleForm>
                <Datagrid>
                    <TextInput source="nickname" />
                    <SelectInput source="decision" choices={[
    { id: 'Accpet', name: 'Accept' },
    { id: 'Decline', name: 'Decline' },
]} />
                    <EditButton />
                </Datagrid>
        </SimpleForm>
    </Edit>
);