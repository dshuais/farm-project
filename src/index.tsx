import React from 'react';
import { createRoot } from 'react-dom/client';
import { Main } from './pages/main';
import './index.css'

const container = document.querySelector('#root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
