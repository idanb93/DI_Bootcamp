import react from 'react';

class Events extends react.Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false,
        }
    }

    clickMe = (event)=>{
        // event.preventDefault();
        alert('I was clicked');
    }

    handleKeyPress = (event)=>{
        if (event.key === 'Enter'){
            alert(`The Enter was pressed, your input is: ${event.target.value}`);
        }
    }

    changeToggle = (event)=>{

        event.preventDefault();

        let toggleButton = document.getElementById('toggle-button');
        this.setState({isToggleOn: !this.state.isToggleOn});
        console.log(this.state.isToggleOn);

        if (this.state.isToggleOn === true){
            toggleButton.textContent = 'ON';
        } else {
            toggleButton.textContent = 'OFF';
        }
    }

    render() {
        return (
            <div>
                <button type='button' onClick={this.clickMe}>Call clickMe</button>
                <br/>
                Enter somthing and click 'Enter': <input onKeyPress={this.handleKeyPress}></input>
                <br/>
                <button onClick={this.changeToggle} id="toggle-button">ON</button>
            </div>

        )
    }
}

export default Events;