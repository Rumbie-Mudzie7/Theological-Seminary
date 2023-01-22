import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Navbar from './components/Navbar';
import GalleryPage from './pages/GalleryPage';
import HomePage from './pages/HomePage';
import InforFormPage from './pages/InforFormPage';
import './main.css';

const history = createBrowserHistory();

function App() {
  return (
    <>
      <Router history={history}>
        <Navbar className="col-lg-12 col-md-6 col-sm-12 col-xs-12" />
        <Switch>
          <Route exact path="/gallery" component={GalleryPage} />
          <Route exact path="/userInfo" component={InforFormPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
