import React from 'react';

import { match } from 'react-router-dom';
import { withStyles, createStyles } from '@material-ui/core/styles';

import { searchByName, random } from '../services/api';
import Grid from '@material-ui/core/Grid';

import Search from '../components/Search';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

interface matchProps {
    id: string
}

interface Ingredient {
    ingredient: string;
    measure: string;
}

type Props = {
  match: match<matchProps>;
  classes: any;
}

type State = {
    drink: any;
    ingredients?: Ingredient[];
}

const styles = (theme:any) => createStyles({
    cocktailTitle: {
        fontFamily: 'Pacifico, Roboto, Arial',
        fontSize: '60px',
        marginBottom: '0'
    },
    root: {
        textAlign: 'left',
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '50px'
    },
    imageWrapper: {
        width: '50px',
        height: '50px',
        padding: '0 12px 0 0'
    },
    image: {
        width: '100%'
    },
    ingredientWrapper: {
    },
    mainImage: {
        maxWidth: '100%',
        paddingRight: '30px'
    },
    measureWrapper: {
        fontWeight: 'bold',
        paddingRight: '12px'
    },
    recipeList: {
        width: '100%'
    }
})

class CocktailDetail extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            drink: undefined,
            ingredients: undefined
        }
    }

    componentDidMount() {
        if (this.props.match.params.id === "random") {
            random()
                .then(data => {
                    console.log(data);
                    this.setData(data);
                })
        } else {
            searchByName(this.props.match.params.id)
                .then(data => {
                    console.log(data);
                    this.setData(data);
                })
            }
    }

    setData(data:any) {
        if (data.drinks) {
            this.setState({
                drink: data.drinks[0],
                ingredients: this.getIngredients(data.drinks[0])
            })
        }
    }

    getIngredients(drink: any) {
        let i = 1;
        let ingredientArray = [];

        while(drink[`strIngredient${i}`]) {
            ingredientArray.push({ingredient: drink[`strIngredient${i}`], measure: drink[`strMeasure${i}`]}),
            i++
        }
        console.log(ingredientArray)
        return ingredientArray
    }
    
    render() {
        if (this.state.drink && this.state.ingredients) {
            return (
                <Grid container className={this.props.classes.root} spacing={24} justify="center" >
                    <Grid item xs={12}>
                        <h1 className={this.props.classes.cocktailTitle}>{ this.state.drink.strDrink } </h1>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={this.props.classes.mainImage}>
                            <img className={this.props.classes.mainImage} src={this.state.drink.strDrinkThumb} />
                        </div>
                    </Grid>
                    
                    <Grid item xs={6}>
                        <List className={this.props.classes.recipeList}>
                            { this.state.ingredients.map((ingredient, i) => 
                                (<ListItem key={i}>
                                    <div className={this.props.classes.imageWrapper}>
                                        <img className={this.props.classes.image} src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.ingredient}-Small.png`} />
                                    </div>
                                    <div className={this.props.classes.measureWrapper}>
                                        <span >{ingredient.measure}</span>
                                    </div>
                                    <div className={this.props.classes.ingredientWrapper}>
                                        <span>{ingredient.ingredient}</span> 
                                    </div>
                                    
                                </ListItem>)
                            ) }
                        </List>
                        <h3>Method</h3>
                        {this.state.drink.strInstructions}
                    </Grid>
                </Grid>
            );
        } else {
            return <div>
                Sorry, we don't have that one
                <Search />
            </div>
        }
    }
}

export default withStyles(styles, {withTheme: true})(CocktailDetail)