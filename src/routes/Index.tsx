import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import Grid from '@material-ui/core/Grid';

import Search from '../components/Search';

import posed from 'react-pose';

type Props = {
    classes: any;
}

type State = {
    isVisible: boolean
}

const Box = posed.div({
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  });

const styles = (theme:any) => createStyles({
    root: {
        height: '100vh'
    },
    gradient: {
        top: 0,
        backgroundColor: '#ED00BB',
        backgroundImage: 'radial-gradient(120% 600px at 50% 200px,#ED00BB,#A100F6 120%)',
        minHeight: '100vh',
        padding: '10px'
    },
    fancyFont: {
        fontFamily: 'Pacifico, Roboto, Arial',
        color: 'white',
        fontSize: '60px',
        fontWeight: 400,
        lineHeight: '70px',
        textShadow: '3px 5px rgba(0,0,0,0.4)'
    },
    searchPosition: {
        marginTop: '-24px'
    }
})

class Index extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            isVisible: false
        }
    }

    componentDidMount() {
        this.setState({
            isVisible: true
        })
    }
    
    render() {
        return (
            <Box pose={this.state.isVisible ? 'visible' : 'hidden'} className={classNames(this.props.classes.gradient, 'box')}>
                    <Grid container className={this.props.classes.root} spacing={24} justify="center" alignItems="center">
                            <Grid item xs={12}>
                                <h1 className={classNames(this.props.classes.fancyFont)}>The Cocktail Mixer</h1>
                                <div className={classNames(this.props.classes.searchPosition)}>
                                    <Search />
                                </div>
                            </Grid>
                    </Grid>
            </Box>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Index);