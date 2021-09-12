import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import HireX from './components/pages/HireX/HireX';
import Ourstory from './components/pages/Ourstory/ourstory';
import Event from './components/pages/Event/Event';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/hire-x' component={HireX} />
        <Route path='/ourstory' component={Ourstory} />
        <Route path='/event' component={Event} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
