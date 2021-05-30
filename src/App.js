import './App.css';
import CardList from './Componentes/CardList.js';
import Info from './Componentes/Info';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path='/sobre/:id' component={Info} />
            <Route path='/' exact={true} component={CardList} />
          </Switch>

        </BrowserRouter>

      </div>
    );
  }


}

export default App;

