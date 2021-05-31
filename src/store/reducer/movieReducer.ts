import { GET_MOVIES, IS_ERROR, IS_LOADING, SET_NEXT_SECTION } from '../actions/movieActions';

interface MovieState {
    movies: any[],
    loading: boolean,
    isError: string,
    section: number
}

const initialState: MovieState = {
    movies: [],
    loading: false,
    isError: '',
    section: 0
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: [
                    ...state.movies,
                    ...action.payload
                ]
            }
        case IS_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case IS_ERROR:
            return {
                ...state,
                isError: action.payload
            }
        case SET_NEXT_SECTION:
            return {
                ...state,
                section: state.section + 1
            }
        default: return state;
    }
}

export default reducer;