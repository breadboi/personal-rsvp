import './App.css';
import HomePage from './components/pages/HomePage';
import Rsvp from './components/pages/Rsvp';

import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route 
            exact 
            path="/" 
            render={() => {
              return (
                <HomePage></HomePage>
              )
            }} 
          />

          <Route
            exact
            path="/rsvp"
            render={() => {
              return <Rsvp></Rsvp>;
            }}
          />

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
