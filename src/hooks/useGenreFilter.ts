import {useSearchParams} from "react-router-dom";
import {useCallback, useMemo} from "react";

export const useGenreFilter = () => {
    const [query, setQuery] = useSearchParams({preferredGenreId: []});

    const genres = useMemo((): string => {
        return query.get('preferredGenreId') ?? '';
    }, [query])

    const addGenres = useCallback((newGenre: string) => {
        setQuery(newGenre)
    }, [setQuery])

    return {searchQuery: genres, setGenres: addGenres}
}