import React from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";

import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';


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
                    { this.props.routes.map((route, i) => (
                        <MenuItem key={i}><Link key={i} to={route.path}>{ route.displayName }</Link></MenuItem>
                    ))}
                </nav>
            </Drawer>
        );
    }
}

export default Navigation