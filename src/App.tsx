import { Anchor, AppShell, Container, Grid } from '@mantine/core';
import { useState } from 'react';
import LiveCam from './components/LiveCam';
import ResortNavBar from './components/ResortNavBar';
import WeatherReport from './components/WeatherReport';
import HeaderComponent from './components/HeaderComponent';
import SnowParticles from './components/SnowParticles';
import InteractiveMap from './components/InteractiveMap';

export type Coords = number[];
export type Resorts = 'Snowbird' | 'Alta' | 'Brighton' | 'Solitude' | 'Park City' | 'Deer Valley';
export const Coordinates: Record<Resorts, Coords> = {
  'Snowbird': [40.5819, -111.6557],
  'Alta': [40.5883, -111.6372],
  'Brighton': [40.5997, -111.5844],
  'Solitude': [40.6196, -111.5913],
  'Park City': [40.6461, -111.4979],
  'Deer Valley': [40.6375, -111.4783],
}

export function App() {

  const [resort, setResort] = useState<Resorts>('Solitude');

  function handleResortSelect(resort: Resorts) {
    setResort(resort)
  }

  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 125, breakpoint: "xs" }}
        padding="md"
      >
        <AppShell.Header>
          <HeaderComponent resort={resort} />
        </AppShell.Header>

        <AppShell.Navbar p="md">
          <ResortNavBar onResortSelect={handleResortSelect} />
        </AppShell.Navbar>

        <AppShell.Main>
          <Grid gutter='lg'>
            <Grid.Col span={6}>
              <InteractiveMap resort={resort}/>
              <WeatherReport resort={resort} />
            </Grid.Col>

            <Grid.Col offset={1} span={5}>
              <LiveCam resort={resort} />
            </Grid.Col>
          </Grid>
        </AppShell.Main>
        <AppShell.Footer>
          <Container>
            <Anchor href="https://open-meteo.com/" target="_blank" underline="hover">
              Weather data provided by Open-Meteo
            </Anchor>
          </Container>
        </AppShell.Footer>
      </AppShell>

      <SnowParticles />
    </>
  );
}

export default App