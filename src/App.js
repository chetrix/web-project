import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import history from './common/history'
const App=()=> {
  console.log(history);
  return (
    <React.Fragment>
      <Header page={true} hamburgerMenuData={true} cartData={true}/>
      <Router history={history}>
        <Switch>
          <Route exact path={['/', '/home']}><Home/></Route>
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App;