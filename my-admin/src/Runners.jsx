import { List,SelectInput, Datagrid, TextField, DateField, ImageField, Show, SimpleShowLayout,ReferenceField } from 'react-admin';

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