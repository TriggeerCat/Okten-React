import {Post} from "../types/Post.ts";
import {FC} from "react";

interface PostComponentProps {
    post: Post
}

export const PostComponent: FC<PostComponentProps> = ({post}) => {
    return (
        <div className='sticky-note'>
            {post.title}
        </div>
    );
};