import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/HomePage.component';

const Hats = (props) =>{
  console.log(props);
  return(
    <div>
      <h1>Hats page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={Hats} />
        {/* <Route exact path='/topics/:topicId' component={TopicDetail} /> */}
      </Switch>
    </div>
  );
}

export default App;
