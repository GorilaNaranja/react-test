import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home/Home';
import StarMatch from './components/StarGame/StarMatch';
import Characters from './components/Characters/Characters';
import CharacterDetail from './components/Characters/CharacterDetail';
import Contact from './components/Contact/Contact';
import PageNotFound from './components/PageNotFound';

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
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
