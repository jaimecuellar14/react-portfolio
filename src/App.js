import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Home from './Views/Home';
import About from './Views/About';
import Contact from './Views/Contact';
import Work from './Views/Work';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/work" component={Work}></Route>
      </Switch>
    </Router>
  );
}

export default App;
