import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies, isError, isLoading } from '../store/actions/movieActions';

export const useFetch = (section: number) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(isLoading(true))
        fetch(`./API/CONTENTLISTINGPAGE-PAGE${section}.json`)
            .then(data => data.json())
            .then(movies => {
                let movieData = movies.page['content-items'].content;
                dispatch(getMovies(movieData));
                dispatch(isLoading(false))
            })
            .catch(e => {
                dispatch(isLoading(false));
                dispatch(isError("No more movies found"));
            })
    }, [dispatch, section])
}