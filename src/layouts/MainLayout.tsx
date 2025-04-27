import {Link, Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div className='text-2xl'>
            <div className='flex justify-around'>
                <Link to={'getter'}>Get cars</Link>
                <Link to={'setter'}>Set cars</Link>
            </div>

            <Outlet/>
        </div>
    );
};

export default MainLayout;