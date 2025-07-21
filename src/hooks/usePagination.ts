import {useSearchParams} from "react-router-dom";
import {useCallback, useMemo} from "react";
import {useSearchQuery} from "./useSearchQuery.ts";

export const usePagination = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const {searchQuery} = useSearchQuery();

    const page = useMemo(() => {
        const queryPage = parseInt(query.get('page') ?? '1');
        if (Number.isNaN(queryPage)) return 1;
        if (queryPage > 500) return 500;
        if (queryPage < 1) return 1;
        return queryPage;
    }, [query])

    const setPage = useCallback((newPage?: number) => {
        setQuery(searchQuery ? {page: newPage ? newPage.toString() : '1', search: searchQuery} : {page: newPage ? newPage.toString() : '1'});
    }, [searchQuery, setQuery])

    return {page, setPage: setPage}
}