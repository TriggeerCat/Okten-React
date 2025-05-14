import {Link, Outlet} from "react-router-dom";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {selectUsersSlice} from "../redux/slices/usersSlice.ts";
import {selectPostsSlice} from "../redux/slices/postsSlice.ts";
import {selectCommentsSlice} from "../redux/slices/commentsSlice.ts";

export const MainLayout = () => {

    const {isLoadedUsers} = useAppSelector(selectUsersSlice);
    const {isLoadedPosts} = useAppSelector(selectPostsSlice);
    const {isLoadedComments} = useAppSelector(selectCommentsSlice);

    return (
        <div>
            <div className='flex justify-between'>
                <Link to={'users'}>Go to Users</Link>
                <Link to={'posts'}>Go to Posts</Link>
                <Link to={'comments'}>Go to Comments</Link>
                {isLoadedUsers && isLoadedPosts && isLoadedComments && <Link to={'all'}>Go to All</Link>}
            </div>

            <hr></hr>

            <Outlet/>
        </div>
    );
};