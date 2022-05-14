import React from "react";

class Color extends React.Component {
    constructor() {
        super();
        this.state = {
            color: 'red',
        }
    }

    // Decides if the component should update

    shouldComponentUpdate(){
        return true;
        // return false;
    }

    // Event handler

    handleClick = (event) => {
        this.setState({ color: 'pink' });
    }

    // When the component has been updated, a timer changes the state, and the color becomes “yellow”.

    componentDidUpdate(prevState) {
        setTimeout(()=>{
            this.setState({color: 'yellow'})
        }, 4000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState){

        const colorDiv = document.getElementById('color');
        const h2 = document.createElement('h2')
        h2.textContent = 'Previous Favorite Color: ' + prevState.color;

        colorDiv.appendChild(h2);

        return null;
    }

    render() {
        return (
            <div id="color">
                <h2 id="favorite-color">My Favorite Color is now: {this.state.color}</h2>
                <button onClick={this.handleClick}>
                    Change Color
                </button>

            </div>
        )
    }
}

export default Color;
