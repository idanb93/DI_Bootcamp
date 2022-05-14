import React from "react";

class BuggyCounter extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        }
    }

    handleClick = (event) => {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        if (this.state.counter >= 5) {
            throw Error('Crashed......');
        }
        return (
            <div style={{ border: '1px solid white', height: '5vh', width: '8vw' }}>
                <button onClick={this.handleClick}>{this.state.counter}
                </button>
            </div>
        )
    }
}

export default BuggyCounter;
