import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home/Home';
import StarMatch from './components/StarGame/StarMatch';

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
      </Switch>
    </Router>
  );
}

export default App;
