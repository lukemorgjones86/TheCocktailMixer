import React from 'react';
import { match } from 'react-router-dom';

import { searchByName, searchByIngredient } from '../services/api';

interface matchProps {
    id: string
}


type Props = {
    match: match<matchProps>
}

type State = {
    drinks?: any[];
}

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
        }
        /*
        searchByName('')
            .then(data => {
                console.log(data);
                this.setState({
                    drinks: data.drinks
                })
            })
            */
    }
    
    render() {
        return (
            <div>
                <h1>All Cocktails: </h1>
                <ul>
                    { this.state.drinks ? this.state.drinks.map(
                        (drink, i ) => <li key={i}><a href={`/cocktail/${drink.strDrink}`}>{drink.strDrink}</a></li>) : ''}
                </ul>
            </div>
        );
    }
}

export default CocktailList