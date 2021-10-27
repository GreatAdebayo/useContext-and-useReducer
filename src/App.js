import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppState from './context/AppState';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <Router>
    <AppState>
      <TodoInput/>
      <TodoList/>
    {/* <Switch>
        <Route  exact path='/'  component={Home}/>
        <Route  exact path='/feed'  component={Feed}/>
        <Route  exact path='/todoinp'  component={TodoInput}/>
      </Switch> */}
    </AppState>
    </Router>
  );
}

export default App;
