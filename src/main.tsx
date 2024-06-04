import '@mantine/core/styles.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.tsx';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <MantineProvider forceColorScheme='dark' defaultColorScheme='dark'>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MantineProvider>
  </React.StrictMode>,
)
