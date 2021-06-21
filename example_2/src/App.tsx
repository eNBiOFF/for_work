import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Homepage from './routes/Homepage';
import Content from './routes/SearchContent'
import PageNotFound from './routes/PageNotFound';
import logo from './ico/icons8-github-50.png';




const App: React.FC = () => {
  console.log();
  return (
    <>
      <header className='header'> 
        <img src={logo} alt='logo' />
        <span className='title'>GitSearch</span>
      </header>
      <Switch>
      
        <Route exact path='/example_2/build/' component={Homepage} />
        <Route path='/example_2/build/search' component={Content}/>
        <Route path='/example_2/build/error' component={PageNotFound}/>
      
      </Switch>
    </>
  );
}

export default App;
