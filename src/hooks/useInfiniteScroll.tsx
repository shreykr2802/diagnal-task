import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNextSection } from "../store/actions/movieActions";

export const useInfiniteScroll = (scrollRef: any) => {
    const dispatch = useDispatch();
    const scrollObserver = useCallback(
        (node) => {
            new IntersectionObserver(entries => {
                entries.forEach(en => {
                    if (en.intersectionRatio > 0) {
                        dispatch(setNextSection());
                    }
                });
            }).observe(node);
        },
        [dispatch]
    );

    useEffect(() => {
        if (scrollRef.current) {
            scrollObserver(scrollRef.current);
        }
    }, [scrollObserver, scrollRef]);
}