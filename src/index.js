import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from 'style/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { Suspense } from 'react';
import { theme } from 'style/theme';
import { Loader } from 'components/Loader/Loader';
import 'modern-normalize';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Suspense fallback={<Loader size='100' />}>
            <BrowserRouter basename='/kiss-platform'>
              <App />
            </BrowserRouter>
          </Suspense>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
