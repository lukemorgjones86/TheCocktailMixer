import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LoopIcon from '@material-ui/icons/Loop';
import Grid from '@material-ui/core/Grid';

type Props = { 
    classes: any;
}

type State = {
    value: string
    searchByIngredient: boolean
    label: string
    toggleStr: string
}

const strings = ['for cocktail', 'by ingredient']


const styles = (theme:any) => createStyles({
    primaryInput: {
        color: 'white !important',
        borderColor: 'white',
        marginRight: '6px',
        '&:before': {
            color: 'white',
            borderColor: 'white'
        },
        '&:after': {
            color: 'white',
            borderColor: 'white'
        }
    },
    root: {
        flexGrow: 1
    },
    searchButton: {
        backgroundColor: 'white',
        marginTop: '12px'
    },
    toggleButton: {
        background: 'none',
        color: 'black',
        border: 'none',
        cursor: 'pointer'
    }
})

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
        this.searchHandler = this.searchHandler.bind(this);
    }

    changeHandler(e:React.ChangeEvent<HTMLInputElement>) {
        this.setState({value: e.target.value});
    }

    searchHandler() {
        const buttonURL = this.state.searchByIngredient ? `/browse_cocktails/${this.state.value}` : `/cocktail/${this.state.value}`;
        return buttonURL
    } 

    toggleHandler() {

        let labelStr = this.state.searchByIngredient ?  strings[0] : strings[1];
        let toggleStr = this.state.searchByIngredient ? strings[1] : strings[0];
        


        this.setState({
            searchByIngredient: !this.state.searchByIngredient,
            label: labelStr,
            toggleStr: toggleStr
        });
    }
    
    render() {   
        return (
            <Grid container className={this.props.classes.root} spacing={16} justify="center">
                <Grid item xs={12}>
                    <TextField 
                        className={classNames(this.props.classes.primaryInput)} 
                        onChange={this.changeHandler} 
                        value={this.state.value} 
                        placeholder={`Search ${this.state.label}`}
                        label={`Search ${this.state.label}`}
                        inputProps={{className: classNames(this.props.classes.primaryInput)}}
                        InputProps={{className: classNames(this.props.classes.primaryInput)}}
                        InputLabelProps={{className: classNames(this.props.classes.primaryInput)}}
                        />
                    <Button className={classNames(this.props.classes.searchButton)} href={ this.searchHandler() }>Search</Button>
                </Grid>
                <Grid item xs={12}>
                    <button type="button" 
                        className={classNames(this.props.classes.toggleButton)} 
                        onClick={this.toggleHandler}>Search {this.state.toggleStr} 
                        <LoopIcon></LoopIcon>
                    </button>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Search)