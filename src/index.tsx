import React from 'react';
import { createRoot } from 'react-dom/client';
import { Main } from './main';
import './index.css'


const container = document.querySelector('#root') as Element;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
