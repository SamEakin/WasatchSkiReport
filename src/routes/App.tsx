import { useState } from 'react';
import { Anchor, AppShell, Container } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';
import ResortNavBar from '../components/ResortNavBar';
import HeaderComponent from '../components/HeaderComponent';
import ResortPage from './ResortPage';
import HomePage from './HomePage';

export type Coords = number[];
export type Resorts = 'Snowbird' | 'Alta' | 'Brighton' | 'Solitude' | 'Park City' | 'Deer Valley' | 'Mt. Everest' | 'Saas Fee';
export const coordinates: Record<Resorts, Coords> = {
  'Snowbird': [40.5819, -111.6557],
  'Alta': [40.5883, -111.6372],
  'Brighton': [40.5997, -111.5844],
  'Solitude': [40.6196, -111.5913],
  'Park City': [40.6461, -111.4979],
  'Deer Valley': [40.6375, -111.4783],
  'Mt. Everest': [27.9881, 86.9250],
  'Saas Fee': [46.10908426, 7.929792526],
}

export function App() {

  const [resort, setResort] = useState<Resorts | undefined>(undefined);

  function handleResortSelect(resort: Resorts | undefined) {
    setResort(resort)
  }

  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 125, breakpoint: "xs" }}
        padding="md">
        <AppShell.Header>
          <HeaderComponent resort={resort} onResortSelect={handleResortSelect} />
        </AppShell.Header>

        <AppShell.Navbar p="md">
          <ResortNavBar onResortSelect={handleResortSelect} />
        </AppShell.Navbar>

        <AppShell.Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:name" element={<ResortPage />} />
          </Routes>
        </AppShell.Main>
        <AppShell.Footer>
          <Container>
            <Anchor href="https://open-meteo.com/" target="_blank" underline="hover">
              Weather data provided by Open-Meteo
            </Anchor>
          </Container>
        </AppShell.Footer>
      </AppShell>

      {/* <SnowParticles /> */}
    </>
  );
}

export default App