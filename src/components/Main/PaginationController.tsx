import {useSearchParams} from "react-router-dom";

export const PaginationController = () => {
    const [query, setQuery] = useSearchParams({page: '1'});

    return (
        <div className='w-full flex justify-around text-xl'>
            <button className='size-10 border-2 border-stone-500 rounded-2xl' onClick={() => {
                let page = +(query.get('page') ?? '1');
                if (page > 1) {
                    setQuery({page: (--page).toString()});
                }
            }}>&lt;</button>

            <div>{query.get('page')}/500</div>

            <button className='size-10 border-2 border-stone-500 rounded-2xl' onClick={() => {
                let page = +(query.get('page') ?? '500');
                if (page < 500) {
                    setQuery({page: (++page).toString()});
                }
            }}>&gt;</button>
        </div>
    );
};