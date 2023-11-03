import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import App from './App';
// import { HelmetProvider } from 'react-helmet-async';
import { RecoilRoot } from 'recoil';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
);
