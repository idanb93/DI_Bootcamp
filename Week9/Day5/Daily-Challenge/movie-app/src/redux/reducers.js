
const initialState = {
    text: '',
    movies: [],
    loading: false,
    movie: []
}

export const reducer = (state = initialState, action = {}) => {

    switch (action.type) {

        case 'SEARCH_MOVIE':
            console.log('SEARCH-MOVIE', action.payload);
            return { ...state, text: action.payload };

        case 'FETCH_MOVIES':
            console.log('FETCH-MOVIES', action.payload);
            return {...state, movies: action.payload}

        case 'FETCH_MOVIE':
            console.log('FETCH-MOVIE', action.payload);
            return {...state, movie: action.payload}
            
        case 'LOADING':
            return {...state};

        default:
            return {...state};
    }
}