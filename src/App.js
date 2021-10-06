import './assets/css/style.css';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Details from './pages/details';

function App() {
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path="/details/:id" component={Details}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
