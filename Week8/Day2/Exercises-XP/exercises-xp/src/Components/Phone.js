import react from 'react';

class Phone extends react.Component {

    constructor(props) {
        super(props);
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        };
    }
    
    changeColor = (event)=>{
        this.setState({color: 'blue'})
    }

    render() {

        return (
            <div>
                <h1>My Phone is a {this.state.brand}</h1>
                <p>it is a {this.state.color} {this.state.model} from {this.state.year}</p>
                <button type='button' onClick={this.changeColor}>Change Color</button>
            </div>
        )
        
    }
    
}

export default Phone;