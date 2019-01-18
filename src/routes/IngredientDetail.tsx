import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';

interface NavLink {
}

type Props = {
}

type State = {

}

class IngredientDetail extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                <h1>Ingredient: </h1>
            </div>
            
        );
    }
}

export default IngredientDetail