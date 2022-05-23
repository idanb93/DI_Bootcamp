import React from 'react';
import {connect} from 'react-redux';
import MovieCard from './MovieCard';

class MovieContainer extends React.Component {

    render(){
        return (
        <section id='movies-container'>
        <MovieCard/>
        </section>
        )
    }
}

export default connect(null, null)(MovieContainer);