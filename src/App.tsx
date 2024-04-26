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

export function App() {

  const [resort, setResort] = useState<Resorts>('Snowbird');

  function handleResortSelect(resort: Resorts) {
    setResort(resort)
  }

  // return (
  //   <InteractiveMap />
  // );

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