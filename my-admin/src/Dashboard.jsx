import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Title } from 'react-admin';

export const Dashboard = () => (
    <Card>
        <Title title="The Golden Run Portal" />
        <CardContent>
            <Typography variant="h4" paragraph align="center">
                Welcome to the Golden Run
            </Typography>
            <div align="center">
                <img src="image.png" style={{ width: '350px' , height: 'auto' }} />
            </div>
            <Typography paragraph align="center">
                On a crisp, sunny Saturday, a group of friends will gather for an epic adventure known as the Golden Run, an exciting bar crawl through the heart of Stellenbosch. Starting from Dorp Street and winding all the way to Aandklaas Pub, this was no ordinary outing; it was a celebration of camaraderie, good spirits, and a touch of friendly competition.
            </Typography>
            <Typography paragraph align="center">
                <strong>Setting the Scene</strong><br />
                The day will begin at the iconic Dorp Street, where the charming architecture and vibrant atmosphere set the perfect backdrop for the festivities. The friends, each armed with a carefully curated set of rules for their bar stops, were ready to embark on their mission. Each bar presented unique challenges, ensuring that the Golden Run was as much about the journey as it was about the destination.
            </Typography>
            <Typography paragraph align="center">
                <strong>The Rules of Engagement</strong><br />
                Each bar came with its own set of “Hail Mary” rules, adding an extra layer of fun and unpredictability. Whether it was ordering a drink in a foreign accent, completing a dare, or finding a stranger to join the group for a round, the challenges sparked laughter and friendly banter. The spirit of the event was infectious, with every friend eager to outdo one another while still cheering on the team.
            </Typography>
        </CardContent>
    </Card>
);
