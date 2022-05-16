import { connect } from "react-redux";
import { selectedMovie } from "../actions";

const MovieList = (props) => {


    return (
        <>
        <h2> Movie List </h2>
        {props.movies.map((movie, i)=>(
            <div>
            <ol>{movie.title} <button onClick={()=>props.movieDetails(i)}>Details</button></ol>
            </div>
        ))}
        </>
    )


}

const mapStateToProps = (state) => {

    return {
        movies: state.moviesReducer.movies
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        movieDetails: (index) => dispatch(selectedMovie(index)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);