import React from 'react';
import Sections from './views/Sections/Sections'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './addons/css/fadeTransition.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './views/Home/Home'


function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Route render={({ location }) => (
              <SwitchTransition mode="out-in">
                <CSSTransition
                    key={ location.pathname }
                    timeout={500}
                    classNames='fade'
                  >
                  <Switch location={ location }>
                      <Route exact path="/Portfolio-Website/" component={ Home } />
                      <Route path="/Portfolio-Website/sections" component={ Sections } />
                  </Switch>
                </CSSTransition>
              </SwitchTransition>
          )}/>
        </main>
      </div>
    </Router>
  );
}

export default App;
