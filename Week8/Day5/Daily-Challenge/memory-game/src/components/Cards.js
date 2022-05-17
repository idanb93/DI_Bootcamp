import react from "react";
import superheroes from "../superheros";

class Cards extends react.Component {

    constructor(props) {
        super(props);
        this.state = {
            topScore: 0,
            currentScore: 0,
            superheroes,
            cardsClickedOn: [],
        }
    }

    shuffleCards = (event) => {

        let superherosCopy = [...this.state.superheroes];

        let currentIndex = superherosCopy.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex !== 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [superherosCopy[currentIndex], superherosCopy[randomIndex]] = [
                superherosCopy[randomIndex], superherosCopy[currentIndex]];
        }

        // If card clicked on was already clicked before:

        if (this.state.cardsClickedOn.includes(event.target.id)){

            if (this.state.currentScore > this.state.topScore){
                this.setState({
                    topScore: this.state.currentScore
                })
            }

            this.setState({
                superheroes: superherosCopy,
                currentScore: 0,
                cardsClickedOn: [],
            })
            
        } else {
            this.setState((prevState)=> ({
                superheroes: superherosCopy,
                currentScore: this.state.currentScore+1,
                cardsClickedOn: [...prevState.cardsClickedOn, event.target.id]
            }));
    
        }
        

    }

    render() {

        return (

            <>
                <section>
                    <div style={{ border: '1px solid grey', backgroundColor: 'red' }}>
                        <h2 style={{ height: '1vh' }}>Superheroes Memory Game</h2>
                        <p style={{ textAlign: 'right' }}><b> Score: {this.state.currentScore} Top Score: {this.state.topScore}</b></p>
                    </div>
                    <div style={{ border: '1px solid grey', backgroundColor: 'red' }}>
                        <h3 style={{ height: '1vh' }}>Get points by clicking on an image but don't click on any more than one!</h3>
                    </div>
                </section>

                <section id='main-section'>
                    {this.state.superheroes.map((card, i) => (
                        <div onClick={this.shuffleCards} id={card.id} key={card.id} style={{ height: '40vh', width: '14vw', padding: '10px 10px 10px 10px', border: '1px solid black' }}>
                            <img id={card.id} src={card.image} style={{ height: '34vh', width: '12vw' }} />
                            <br />
                            <b id={card.id}>Name: </b>{card.name}
                            <br />
                            <b id={card.id}>Occupation: </b>{card.occupation}
                        </div>
                    )
                    )}
                </section>

            </>
        )

    }
}

export default Cards;