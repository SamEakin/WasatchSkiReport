import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <MantineProvider forceColorScheme='dark' defaultColorScheme='dark'>
          <RouterProvider router={router} />
        </MantineProvider>
  </React.StrictMode>,
)
