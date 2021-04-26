import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import DefaultLayoutRoute from 'layouts/defaultLayout';

import Home from 'components/home'
import About from 'components/about'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <DefaultLayoutRoute path="/about" component={About} />
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
