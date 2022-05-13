import react from 'react';
import Car from './Car';

class Garage extends react.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <Car size={this.props.size}/>
        )
    }
}

export default Garage;