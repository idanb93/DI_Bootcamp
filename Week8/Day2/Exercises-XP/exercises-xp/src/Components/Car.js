import react from 'react';
import Garage from './Garage';

class Car extends react.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
        }
    }

    render() {

        const { name, model } = this.props;

        return (
            <div>
                <h1>
                    This car is a {name}, it's model is {model} and it's color is {this.state.color}
                </h1>
                <h2>
                    Who lives in my {this.props.size} Garage?
                </h2>
            </div>
        )
    }
}

export default Car;