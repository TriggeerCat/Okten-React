import {Link, Outlet} from "react-router-dom";

const ChoiceLayout = () => {
    return (
        <>
            <div className='flex gap-50 text-2xl p-2'>
                <Link to={'jsonplaceholder'}>Jsonplaceholder</Link>
                <Link to={'dummyjson'}>Dummyjson</Link>
            </div>

            <hr/>

            <Outlet/>
        </>
    );
};

export default ChoiceLayout;