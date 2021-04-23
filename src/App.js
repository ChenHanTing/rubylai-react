import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from 'components/home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
