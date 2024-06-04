import { Grid } from '@mantine/core';
import InteractiveMap from '../components/InteractiveMap';
import LiveCam from '../components/LiveCam';
import WeatherReport from '../components/WeatherReport';
import { Resorts } from "../routes/App";
import { useParams } from 'react-router-dom';

export default function  ResortPage() {
    const { name } = useParams(); 

    return (
        <Grid gutter='lg'>
            <Grid.Col span={6}>
              <InteractiveMap resort={name as Resorts} />
              <WeatherReport resort={name as Resorts} />
            </Grid.Col>

            <Grid.Col offset={1} span={5}>
              <LiveCam resort={name as Resorts} />
            </Grid.Col>
          </Grid>
    )
}