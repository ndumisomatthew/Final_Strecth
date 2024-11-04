import { List, Datagrid, TextField, DateField, ImageField, Show, SimpleShowLayout,ReferenceField } from 'react-admin';

export const PostList = () => (
    <List>
        <Datagrid>
            <TextField source="title" />
            <TextField source="caption" />
            {/* <ImageField source="picture" title="title" />
            <div>
                <img src="black.jpeg" title="Greatest Bear" />
            </div> */}
        </Datagrid>
    </List>
);

export const PostShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="title" />
            <ImageField source="picture" title="title" />
            <div>
                <img src="black.jpeg" title="Greatest Bear" />
            </div>
            <TextField source="teaser" />
            <ReferenceField source="name" reference="users" label="Author" />
        </SimpleShowLayout>
    </Show>
);