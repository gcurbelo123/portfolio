import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './home/home';
import AboutMe from './info/aboutme';
import Projects from './info/projects';
import Contact from './info/contact';

import './App.css';

const App = () => (
  <BrowserRouter>
    <Route
      exact
      path="/"
      render={() => (
        <Home />
      )}
    />
    <Route
      exact
      path="/about"
      render={() => (
        <AboutMe />
      )}
    />
    <Route
      exact
      path="/projects"
      render={() => (
        <Projects />
      )}
    />
    <Route
      exact
      path="/conact"
      render={() => (
        <Contact />
      )}
    />
  </BrowserRouter>
);

export default App;
