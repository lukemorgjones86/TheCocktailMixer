import React from 'react';
import { RouteComponentProps } from 'react-router';
import { match } from 'react-router-dom';

import { searchByName } from '../services/api';

import Search from '../components/Search';

interface matchProps {
    id: string
}

type Props = {
  match: match<matchProps>
}

type State = {
    drink: any;
    ingredients?: string[];
}

class CocktailDetail extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            drink: undefined,
            ingredients: undefined
        }
    }

    componentDidMount() {
        searchByName(this.props.match.params.id)
            .then(data => {
                console.log(data);
                if (data.drinks) {
                    this.setState({
                        drink: data.drinks[0],
                        ingredients: this.getIngredients(data.drinks[0])
                    })
                }
            })
    }

    getIngredients(drink: any) {
        let i = 1;
        let ingredientArray = [];

        while(drink[`strIngredient${i}`]) {
            ingredientArray.push(drink[`strIngredient${i}`]),
            i++
        }
        console.log(ingredientArray)
        return ingredientArray
    }
    
    render() {
        if (this.state.drink && this.state.ingredients) {
            return (
                <div>
                    <h1>Cocktail: { this.props.match.params.id } </h1>
                    <h3>Ingredients</h3>
                    { this.state.ingredients.map(ingredient => ingredient) }
                    <h3>Method</h3>
                    {this.state.drink.strInstructions}
                </div>
            );
        } else {
            return <div>
                Sorry, we don't have that one
                <Search />
            </div>
        }
    }
}

export default CocktailDetail