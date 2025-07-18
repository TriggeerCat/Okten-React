import {useSearchParams} from "react-router-dom";
import {useCallback, useMemo} from "react";

export const useSearchQuery = () => {
    const [query, setQuery] = useSearchParams({search: ''});

    const searchQuery = useMemo(() => {
        return query.get('search') ?? '';
    }, [query])

    const setSearchQuery = useCallback((newSearch?: string) => {
        setQuery({search: newSearch ?? ''})
    }, [setQuery])

    return {searchQuery, setSearchQuery}
}