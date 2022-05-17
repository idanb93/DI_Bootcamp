import quotes from '../quotes';
import React from 'react';

class QuoteGenerator extends React.Component {

    constructor(){
        super();
        this.state = {
            randomQuote: '',
        }
    }

    changeBackgroundColor = (event) => {
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        
        const AppHeader = document.querySelector('.App-header');
        const Quote = document.getElementById('quote');
        const Author = document.getElementById('author');
        AppHeader.style.backgroundColor = bgColor;
        Quote.style.color = bgColor;
        Author.style.color = bgColor;

        const quoteContainer = document.getElementById('quote-container');
        quoteContainer.style.backgroundColor = 'white';
    }

    handleRandomQuote = (event)=>{
        const randomQuote =  quotes[Math.floor((Math.random() * quotes.length))];
        console.log(randomQuote);        
        this.setState({randomQuote: randomQuote})
        this.changeBackgroundColor();
    }

    render () {
        return (
            <div id='quote-container' style={{border: '1px solid whitesmoke', height: '42vh', width: '48vw'}} >
                <link src='/QuoteGenerator.css'></link>
                <h1 id='quote'>{this.state.randomQuote.quote}</h1>
                <h6 id='author'>{this.state.randomQuote.author}</h6>
                <button style={{position: 'sticky', left: '18vw', top: '27vh'}} onClick={this.handleRandomQuote} >New Quote</button>
            </div>
        )
    }

    }

export default QuoteGenerator;