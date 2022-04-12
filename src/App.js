import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/HomePage.component';

const TopicsList = (props) =>{
  console.log(props);
  return(
    <div>
      <h1>Topic list page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/topics' component={TopicsList} />
        {/* <Route exact path='/topics/:topicId' component={TopicDetail} /> */}
      </Switch>
    </div>
  );
}

export default App;
