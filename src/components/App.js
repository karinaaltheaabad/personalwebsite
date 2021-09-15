import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import NotFound from './NotFound';
import NavBar from './Navbar';
import ProjectsContainer from './ProjectsContainer';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Switch>
        <Route path='/personal-website' component={ Home }/>
        <Route exact path="/" component={ Home } />
        <Route exact path="/projects" component={ ProjectsContainer } />
        <Route exact path="/contact" component={ Contact } />
        <Route component={ NotFound }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
