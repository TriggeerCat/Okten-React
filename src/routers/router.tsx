import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersLayout from "../layouts/UsersLayout.tsx";
import PostsLayout from "../layouts/PostsLayout.tsx";
import CommentsLayout from "../layouts/CommentsLayout.tsx";

export const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                path: 'users', element: <UsersLayout/>, children: [
                    {path: 'jsonplaceholder', element: <div className='text-xl'>Jsonplaceholder</div>},
                    {path: 'dummyjson', element: <div className='text-xl'>Dummyjson</div>}
                ]
            },
            {
                path: 'posts', element: <PostsLayout/>, children: [
                    {path: 'jsonplaceholder', element: <div className='text-xl'>Jsonplaceholder</div>},
                    {path: 'dummyjson', element: <div className='text-xl'>Dummyjson</div>}]
            },
            {
                path: 'comments', element: <CommentsLayout/>, children: [
                    {path: 'jsonplaceholder', element: <div className='text-xl'>Jsonplaceholder</div>}
                ]
            }
        ]
    }
])