import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './home/home';
import Projects from './info/projects';
import Contact from './info/contact';
import Bio from './info/bio';
import Education from './page/education';

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
      path="/bio"
      render={() => (
        <Bio />
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
      path="/education"
      render={() => (
        <Education />
      )}
    />
    <Route
      exact
      path="/contact"
      render={() => (
        <Contact />
      )}
    />
  </BrowserRouter>
);

export default App;
