import {Link, Outlet} from "react-router-dom";

const CommentsLayout = () => {
    return (
        <>
            <div className='flex text-2xl p-2'>
                <Link to={'jsonplaceholder'}>Jsonplaceholder</Link>
            </div>

            <hr/>

            <Outlet/>
        </>
    );
};

export default CommentsLayout;