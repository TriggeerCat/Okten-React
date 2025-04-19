import {Link, Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <div className='flex justify-between text-2xl p-2'>
                <Link to={'users'}>Users</Link>
                <Link to={'posts'}>Posts</Link>
                <Link to={'comments'}>Comments</Link>
                <Link to={''}>Home</Link>
            </div>

            <hr/>

            <Outlet/>
        </>
    );
};

export default MainLayout;