import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes } from 'react-router-dom';
import renderRoutes from '@/utils/renderRoutes';
import routes from '@/config/router';
import { GlobalContext } from '@/utils/context';
import './klein-style';

import './index.less';

const __PREFIX__ = 'klein-pro';

ReactDOM.render(
  <React.StrictMode>
    <GlobalContext.Provider
      value={{
        prefix: __PREFIX__,
      }}
    >
      <BrowserRouter>
        <Routes>{renderRoutes(__PREFIX__, routes)}</Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
