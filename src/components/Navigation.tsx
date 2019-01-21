import React from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";

import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

import Button from '@material-ui/core/Button';


interface NavLink {
    displayName: string;
    path: string;
}

type Props = {
    routes: NavLink[];
    open: boolean;
}

type State = {

}

class Navigation extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }
    
    render() {
        return (
            <Drawer open={this.props.open} variant="persistent">
                <nav>
                    <List>
                    { this.props.routes.map((route, i) => (
                        <ListItem key={i} href={route.path}><Button variant="text" key={i} href={route.path}>{ route.displayName }</Button></ListItem>
                    ))}
                    </List>
                </nav>
            </Drawer>
        );
    }
}

export default Navigation