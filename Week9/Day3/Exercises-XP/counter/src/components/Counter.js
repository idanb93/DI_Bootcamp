import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/actions';

class Counter extends React.Component {

    incrementIfOdd = () => {
        if (this.props.counter % 2 === 1) {
            this.props.handleIncrement();
        }
    }

    incrementAsync = () => {
        setTimeout(() => {
            this.props.handleIncrement();
        }, 1000)
    }

    render() {
        return (
            <>
                <span>
                    Clicked: {this.props.counter} times
                    <button style={{ height: '4vh', width: '6vw', marginLeft: '0.5vw' }} onClick={this.props.handleIncrement}>+</button>
                    <button style={{ height: '4vh', width: '6vw', marginLeft: '0.5vw' }} onClick={this.props.handleDecrement}>-</button>
                    <button style={{ height: '4vh', width: '6vw', marginLeft: '0.5vw' }} onClick={this.incrementIfOdd}>Increment if odd</button>
                    <button style={{ height: '4vh', width: '6vw', marginLeft: '0.5vw' }} onClick={this.incrementAsync}>Increment async</button>
                </span>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        handleIncrement: () => dispatch(increment()),
        handleDecrement: () => dispatch(decrement()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)