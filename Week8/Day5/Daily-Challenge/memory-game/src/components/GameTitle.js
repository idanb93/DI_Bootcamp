import react from "react";

class GameTitle extends react.Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
                <div style={{border: '1px solid grey', backgroundColor: 'red'}}>
                    <h2 style={{ height: '1vh'}}>Superheroes Memory Game</h2>
                    <p style={{textAlign: 'right'}}><b> Score: Top Score: </b></p>
                </div>
                <div style={{border: '1px solid grey', backgroundColor: 'red'}}>
                    <h3 style={{ height: '1vh' }}>Get points by clicking on an image but don't click on any more than one!</h3>
                </div>
            </>
        )
    }
}

export default GameTitle;