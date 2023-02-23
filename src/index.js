import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';

import 'modern-normalize';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/kiss-platform'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
