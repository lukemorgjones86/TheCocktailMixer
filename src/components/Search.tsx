import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

type Props = {
}

type State = {
    value: string
    searchByIngredient: boolean
    label: string
    toggleStr: string
}

const strings = ['for cocktail', 'by ingredient']

class Search extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            value: '',
            searchByIngredient: false,
            label: strings[0],
            toggleStr: strings[1]
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.toggleHandler = this.toggleHandler.bind(this);
    }

    changeHandler(e:React.ChangeEvent<HTMLInputElement>) {
        this.setState({value: e.target.value});
        console.log(e.target.value)
    }

    searchHandler() {

    } 

    toggleHandler() {

        let labelStr = this.state.searchByIngredient ?  strings[0] : strings[1];
        let toggleStr = this.state.searchByIngredient ? strings[1] : strings[0];
        const buttonURL = this.state.searchByIngredient ? `/browse_cocktails/${this.state.value}` : `/cocktail/${this.state.value}`;


        this.setState({
            searchByIngredient: !this.state.searchByIngredient,
            label: labelStr,
            toggleStr: toggleStr
        });
    }
    
    render() {   
        return (
            <div>
                <h2>Anyone fancy a cocktail?</h2>
                <TextField onChange={this.changeHandler} value={this.state.value} label={`Search ${this.state.label}`}/>
                <button type="button" onClick={this.toggleHandler}>{this.state.toggleStr}</button>
                <button type="button" onClick={ this.searchHandler }>Search</button>

                <Button href={`/cocktail/${this.state.value}`}>Search</Button>
            </div>
        );
    }
}

export default Search