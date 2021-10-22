import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home/Home';
import StarMatch from './components/StarGame/StarMatch';
import Characters from './components/Characters';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/star-game'>
          <StarMatch></StarMatch>
        </Route>
        <Route path='/characters'>
          <Characters></Characters>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
