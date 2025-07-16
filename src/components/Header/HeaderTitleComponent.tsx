import { IoIosAirplane } from "react-icons/io";

export const HeaderTitleComponent = () => {
    return (
        <div className='flex justify-between gap-50'>
            <h1 className='text-xl p-2'>
                <span className='text-teal-100'>TriggeerFilms</span>
                <span className='text-yellow-100'>.ua</span>
            </h1>

            <button className='bg-red-500 rounded-xl p-2 flex justify-between items-center gap-1'>
                <IoIosAirplane/>
                <span>Browse Genres</span>
            </button>
        </div>
    );
};