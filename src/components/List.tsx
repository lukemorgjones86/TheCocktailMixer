import React from 'react';

type Props = {
    list: string[];
}

type State = {

}

class List extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }
    
    render() {
        return (
            <ul>
                { this.props.list.map((string, i )=> (
                    <li><a key={i} href={`/cocktailDetail/:${string}`}>{string}</a></li>
                ))}
            </ul>
        );
    }
}

export default List