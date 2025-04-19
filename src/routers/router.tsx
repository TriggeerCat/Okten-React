import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";

export const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, children: [
            {path: 'users', element: <div className='text-xl'>Users</div>},
            {path: 'posts', element: <div className='text-xl'>Posts</div>},
            {path: 'comments', element: <div className='text-xl'>Comments</div>},
            {path: 'products', element: <div className='text-xl'>Products</div>}
        ]}
])