import React, { useEffect, useState, memo } from 'react';
import '../../App.css';
import MissingPoster from '../../assets/placeholder_for_missing_posters.png';

const Movie = ({ ...movie }) => {

    const [image, setImage] = useState<string>();

    useEffect(() => {
        import(`../../assets/${movie["poster-image"]}`)
            .then((image) => setImage(image.default))
            .catch((error) => {
                setImage(MissingPoster)
            });
    },[movie]);

    return (
        <div className="Movie">
            <img src={image} alt="movie" className="ImagesSize"/>
            <h2 className="MovieTitle">{movie.name}</h2>
        </div>
    );
}

export default memo(Movie);