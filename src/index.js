import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Teams from './components/Teams';
import Team from './components/Team';
import NewTeamForm from './components/NewTeamForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />}/>
          <Route path="teams" element={<Teams />}>
            <Route path="teamid" element={<Team />}/>
            <Route path="new" element={<NewTeamForm />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

