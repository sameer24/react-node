import React from 'react';
import ReactDOM from 'react-dom';
import CelebrityJokes from './components/CelebrityJokes';
import FoodJokes from './components/FoodJokes';
import Callback from './components/Callback';
import JokeDetail from './components/JokeDetail'
import AddJoke from './components/AddJoke'
import { Router, Route, browserHistory } from 'react-router';
import { requireAuth } from './utils/AuthService';

const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={FoodJokes} />
        <Route path="/special" component={CelebrityJokes} onEnter={requireAuth} />
        <Route path="/callback" component={Callback} />
        <Route path="/addjoke" component={AddJoke} />
        <Route path="/jokeDetail/:jokeID" component={JokeDetail}  />
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));