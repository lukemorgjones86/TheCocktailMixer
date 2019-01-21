import React from 'react';
import { match } from 'react-router-dom';

import { withStyles, createStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

import { searchByName, searchByIngredient } from '../services/api';

interface matchProps {
    id: string
}


type Props = {
    match: match<matchProps>;
    classes: any;
}

type State = {
    drinks?: any[];
}

const styles = (theme:any) => createStyles({
    root: {
        textAlign: 'left',
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '50px',
        width: '100%'
    },
    cocktailTitle: {
        fontFamily: 'Pacifico, Roboto, Arial',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center'
        },
        marginBottom: '0'
    },
    listLayout: {
        width: '33.33%',
        float: 'left',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            textAlign: 'center',
            float: 'none'
        },
    },
    errorLayout: {
        height: "100vh"
    }
})

class CocktailList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            drinks: undefined
        }
    }

    componentDidMount() {
        console.log(this.props.match.params)

        if (this.props.match.params.id) {
            searchByIngredient(this.props.match.params.id)
                .then(data => {
                    console.log(data);
                    this.setState({
                        drinks: data.drinks
                    })
                })
        } else {
            searchByName('')
            .then(data => {
                console.log(data);
                this.setState({
                    drinks: data.drinks
                })
            })
        }
    }
    
    render() {
        if (this.state.drinks) {
            return (
                <Grid container className={this.props.classes.root} spacing={24} justify="center" >
                    <Grid item xs={12}>
                        <h1 className={this.props.classes.cocktailTitle}>Cocktail List </h1>
                        <List>
                            { this.state.drinks ? this.state.drinks.map(
                                (drink, i ) =>  (<ListItem key={i} className={this.props.classes.listLayout}><Button variant="text" href={`/cocktail/${drink.strDrink}`}>{drink.strDrink}</Button></ListItem>)) : ''}
                        </List>
                    </Grid>
                </Grid>
            );
        } else {
           return <Grid container className={this.props.classes.errorLayout} spacing={24} justify="center" alignItems="center">
            <Grid item xs={12}>
                <p>Sorry no drinks match your search</p>
            </Grid>
            </Grid>
        }
    }
}

export default withStyles(styles, {withTheme: true})(CocktailList)