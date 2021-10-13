import './App.css';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Quiz from './Components/Quiz';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/quiz" component={Quiz}/>
      </Switch>
    </Router>
  );
}

export default App;
