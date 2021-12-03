import './App.css';
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Login } from './pages';
import { isLoggedIn, isLoggedInContext } from './utils';
import { Layout } from './components';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(isLoggedIn());

  console.log({ isAuthenticated });
  return (
    <isLoggedInContext.Provider value={{ isAuthenticated, setAuthenticated }}>
      <div className="App">
        {!isAuthenticated ? (
          <Routes>
            <>
              <Route exact path="/login" element={<Login />} />
              <Route path="*" element={<Navigate replace to="/login" />} />
            </>
          </Routes>
        ) : (
          <Routes>
            <Route path="/*" element={<Layout />} />
          </Routes>
        )}
      </div>
    </isLoggedInContext.Provider>
  );
}

export default App;
