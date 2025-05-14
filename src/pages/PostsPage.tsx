import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {postsSliceActions, selectPostsSlice} from "../redux/slices/postsSlice.ts";

export const PostsPage = () => {
    const {posts} = useAppSelector(selectPostsSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postsSliceActions.loadPosts())
    }, [dispatch])

    return (
        <ul>
            {posts.map(value => <li key={value.id}>{value.title}</li>)}
        </ul>
    );
};