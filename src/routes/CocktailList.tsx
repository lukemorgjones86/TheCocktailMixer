import React from 'react';

import { searchByName } from '../services/api';

type Props = {

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
        searchByName('')
            .then(data => {
                console.log(data);
                this.setState({
                    drinks: data.drinks
                })
            })
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