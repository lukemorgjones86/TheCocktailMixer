import React from 'react';
import Search from '../components/Search';

type Props = {
}

type State = {

}

class Index extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                <h1>Index Page</h1>
                <Search />
            </div>
        );
    }
}

export default Index;