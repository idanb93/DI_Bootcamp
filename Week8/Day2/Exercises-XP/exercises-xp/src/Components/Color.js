import react from 'react';

class Color extends react.Component {

    constructor(props) {
        super(props);
        this.state = {
            favoriteColor: 'red',
        }
    }

    changeColor = ()=>{
        this.setState({favoriteColor: 'blue'})
    }
    

    render() {

        return (
            <div>
            <h1>My Favorite Color is {this.state.favoriteColor}</h1>
            <button onClick={this.changeColor}>Change Color</button>
            </div>
        )
        
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({favoriteColor: 'yellow'})
        }, 5000)

    }
    
}

export default Color;