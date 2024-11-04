import * as React from "react";
import { Title, Show, SimpleShowLayout, ImageField } from 'react-admin';

export const MapShow = () => (
    <Show>
        <Title>Town Map</Title>
        <SimpleShowLayout>
            <ImageField source="Map" title="Town Map" />
        </SimpleShowLayout>
    </Show>
);
