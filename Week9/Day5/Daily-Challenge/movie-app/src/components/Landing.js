import React from 'react';
import SearchForm from './SearchForm';
import MoviesContainer from './MoviesContainer';

class Landing extends React.Component {

    render(){
        return (
            <>
            <SearchForm />
            <MoviesContainer />
            </>
        )
    }
}

export default Landing;