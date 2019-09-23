import React , { useEffect } from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom'
import './App.css';

import Navbar from './components/Nav'
import Home from './page/Home'
import Profile from './page/Profile'

import { fetchUserAction } from './actions/auth'

// redux
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  useEffect(() =>{
    store.dispatch(fetchUserAction())
  },[])

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile}/>
          </div>
        </Switch>
      </BrowserRouter>
    </Provider>  
  );
}


export default App
