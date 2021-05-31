import { memo } from 'react';
import { useSelector } from 'react-redux';
import '../App.css';
import Movie from './Movie/Movie';
import { RootState } from '../store/store';
import { v4 as uuidv4 } from 'uuid';
import { useFetch } from '../hooks/useFetch';

const Content = () => {

    const movies = useSelector((state: RootState) => state.movie.movies);
    const section = useSelector((state: RootState) => state.movie.section);
    useFetch(section);

    return (
        <div className="Content">
            {movies.map((movie: any) => {
                return <Movie key={uuidv4()} {...movie} />
            })}
        </div>
    );
}

export default memo(Content);