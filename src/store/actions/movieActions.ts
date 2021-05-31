export const GET_MOVIES = "GET_MOVIES";
export const IS_LOADING = "IS_LOADING";
export const IS_ERROR = "IS_ERROR";
export const SET_NEXT_SECTION = "SET_NEXT_SECTION";

export const getMovies = (movies: any) => {
    return {
        type: GET_MOVIES,
        payload: movies
    }
}

export const isLoading = (loading: boolean) => {
    return {
        type: IS_LOADING,
        payload: loading
    }
}

export const isError = (error: string) => {
    return {
        type: IS_ERROR,
        payload: error
    }
}

export const setNextSection = () => {
    return {
        type: SET_NEXT_SECTION
    }
}