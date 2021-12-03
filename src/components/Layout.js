import React from 'react';
import NavBar from './NavBar';
import { Route, Routes, Navigate } from 'react-router-dom';

import routes from '../routes';

const Layout = () => {
  return (
    <>
      <NavBar />
      <React.Suspense>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  element={<route.component />}
                />
              )
            );
          })}
          <Route path="*" element={<Navigate replace to="/posts" />} />
        </Routes>
      </React.Suspense>
    </>
  );
};

export default Layout;
