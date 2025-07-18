import {useSearchParams} from "react-router-dom";
import {useCallback, useMemo} from "react";

export const usePagination = () => {
    const [query, setQuery] = useSearchParams({page: '1'});

    const page = useMemo(() => {
        const queryPage = parseInt(query.get('page') ?? '1');
        if (Number.isNaN(queryPage)) return 1;
        if (queryPage > 500) return 500;
        if (queryPage < 1) return 1;
        return queryPage;
    }, [query])

    const setPage = useCallback((newPage?: number) => {
        setQuery({ page: newPage? newPage.toString() : '1'});
    }, [setQuery])

    return { page, changePage: setPage }
}