import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { RootState } from '../store/store';

const Bottom = () => {
    const dataLoading = useSelector((state: RootState) => state.movie.loading);
    const error = useSelector((state: RootState) => state.movie.isError);

    let bottomBoundaryRef = useRef(null);
    useInfiniteScroll(bottomBoundaryRef);

    return (
        <>
            <div id='page-bottom-boundary' ref={bottomBoundaryRef}></div>
            {dataLoading && <h2>Loading ..... </h2>}
            {error && <h2>You have reached the end of list!!</h2>}

        </>
    );
}

export default Bottom;