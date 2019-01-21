import React from 'react';

import { searchIngredient } from '../services/api';

type Props = {

}

type State = {
    ingredients?: any[];
}

class IngredientsList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            ingredients: undefined
        }
    }

    componentDidMount() {
        searchIngredient('')
            .then(data => {
                this.setState({
                    ingredients: data.ingredients
                })
            })
    }
    
    render() {
        return (
            <div>
                <h1>All Ingredients: </h1>
                <ul>
                    { this.state.ingredients ? this.state.ingredients.map((ingredient, i) => <li key={i}>{ingredient.strType}: {ingredient.strIngredient}</li>) : ''}
                </ul>
            </div>
        );
    }
}

export default IngredientsList