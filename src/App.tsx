import { AppShell, Center, Group, Paper, Title } from '@mantine/core';
import { useState } from 'react';
import LiveCam from './components/LiveCam';
import ResortNavBar from './components/ResortNavBar';

export function App() {

  const [resort, setResort] = useState<string>('');

  function handleResortSelect(resort: string) {
    setResort(resort)
  }

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 125,
        breakpoint: "xs"
      }}
      padding="md"
    >
      <AppShell.Header>
        <Center>
          <Title>Utah Ski Reports</Title>
        </Center>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <ResortNavBar onResortSelect={handleResortSelect}/>
      </AppShell.Navbar>

      <AppShell.Main>
        <Group>
          <LiveCam resort={resort} />
        </Group>
      </AppShell.Main>
    </AppShell>
  );
}

export default App