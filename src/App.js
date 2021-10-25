import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home/Home';
import StarMatch from './components/StarGame/StarMatch';
import Characters from './components/Characters';
import CharacterDetail from './components/Characters/CharacterDetail';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/star-game'>
          <StarMatch></StarMatch>
        </Route>
        <Route exact path='/characters'>
          <Characters></Characters>
        </Route>
        <Route path='/characters/:_id'>
          <CharacterDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
