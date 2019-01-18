import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

// Material UI components
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/menu';

// App components
import Navigation from './components/Navigation';

// Route components
import Index from './routes/Index';
import CocktailDetail from './routes/CocktailDetail';
import IngredientDetail from './routes/IngredientDetail';
import IngredientsList from './routes/IngredientsList';
import CocktailList from './routes/CocktailList';


const navigationRoutes = [
  { displayName: 'Home', path: '/'},
  { displayName: 'Browse Cocktails', path: 'browse_cocktails'},
  { displayName: 'Find a cocktail', path: 'cocktail'},
  { displayName: 'Browse Ingredients', path: 'browse_ingredients'},
  { displayName: 'Random Cocktail', path: 'random_cocktail'},
]

type Props = {

}

type State = {
  isMenuOpen: boolean;
}

const initialState = {
  isMenuOpen: true
}

class App extends Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = initialState;
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navigation routes={ navigationRoutes } open={this.state.isMenuOpen}/>
            <Route path='/' exact component={Index} />
            <Route path='/browse_cocktails/:id?' component={CocktailList} />
            <Route path='/cocktail/:id' component={CocktailDetail} />
            <Route path='/browse_ingredients/' component={IngredientsList} />
            <Route path='/random_cocktail/' component={CocktailDetail} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
