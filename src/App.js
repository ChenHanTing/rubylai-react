import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import DefaultLayoutRoute from 'layouts/defaultLayout';

import Home from 'components/home'
import About from 'components/about'
import Voyage from 'pages/voyage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <DefaultLayoutRoute path="/about" component={About} />
          <DefaultLayoutRoute path="/voyage" component={Voyage} />
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
