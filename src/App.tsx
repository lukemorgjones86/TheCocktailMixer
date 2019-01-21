import React, { Component } from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import classNames from 'classnames';

import logo from './logo.svg';
import './App.css';

// Material UI components
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// App components
import Navigation from './components/Navigation';

// Route components
import Index from './routes/Index';
import CocktailDetail from './routes/CocktailDetail';
import CocktailList from './routes/CocktailList';


const navigationRoutes = [
  { displayName: 'Home', path: '/'},
  { displayName: 'Browse Cocktails', path: '/browse_cocktails'},
  { displayName: 'Random Cocktail', path: '/cocktail/random'}
]

type Props = {
  classes: any;
}

type State = {
  isMenuOpen: boolean;
}

const initialState = {
  isMenuOpen: false
}

const drawerWidth = 240;

const styles = (theme:any) => createStyles({
  menuBtnPos: {
    position: 'absolute',
    top: '24px',
    padding: '12px 0'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
})

class App extends Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = initialState;
    this.menuHandler = this.menuHandler.bind(this)
  }

  menuHandler() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
    
  }
  render() {
    return (
      <div className="App">
        <IconButton className={classNames(this.props.classes.menuBtnPos)} onClick={this.menuHandler}>
          <MenuIcon />
        </IconButton>
        <Router>
          <div>
            <Navigation routes={ navigationRoutes } open={this.state.isMenuOpen} />
            <Route path='/' exact component={Index} />
            <Route path='/browse_cocktails/:id?' component={CocktailList} />
            <Route path='/cocktail/:id' component={CocktailDetail} />
          </div>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles, {withTheme: true})(App);
