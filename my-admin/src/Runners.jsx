import { List,SelectInput, Datagrid, TextField, DateField, ImageField, Show, SimpleShowLayout,ReferenceField } from 'react-admin';

export const PostList = () => (
    <List>
        <Datagrid>
            <TextField source="nickname" />
            <SelectInput source="decision" choices={[
    { id: 'Accept', name: 'Accepted' },
    { id: 'Decline', name: 'Declined' },
    { id: 'people', name: 'People' },
]} />
        </Datagrid>
    </List>
);

export const PostShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="nickname" />
            <TextField source="fav_drink" />
            <TextField source="stats" />
            <TextField source="caution" />
        </SimpleShowLayout>
    </Show>
);