import React, {Component} from 'react';
//import { render } from '@testing-library/react';

const WithData = (WrappedComponent, url) => {
    class WithData extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: []
            }
        }
        
        ComponentDidMount() {
            fetch(url)
            .the(response => response.json())
            .then(data => this.setState({data: data}))
        }
        
        render() {
            return(
                <WrappedComponent data = {this.state.data} {...this.props}></WrappedComponent>
            )
        }

    }
    return WithData;
}

export default WithData;