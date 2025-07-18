import { IoIosAirplane } from "react-icons/io";
import {Link} from "react-router-dom";
import {usePagination} from "../../hooks/usePagination.ts";
import {useSearchQuery} from "../../hooks/useSearchQuery.ts";

export const HeaderTitleComponent = () => {
    const {changePage} = usePagination();
    const {setSearchQuery} = useSearchQuery();

    const onClickHandler = () => {
        changePage();
        setSearchQuery();
    }

    return (
        <div className='flex justify-between gap-50'>
            <Link to='' onClick={onClickHandler} className='text-xl p-2'>
                <span className='text-teal-100'>TriggeerFilms</span>
                <span className='text-yellow-100'>.ua</span>
            </Link>

            <button className='bg-red-500 rounded-xl p-2 flex justify-between items-center gap-1'>
                <IoIosAirplane/>
                <span>Browse Genres</span>
            </button>
        </div>
    );
};