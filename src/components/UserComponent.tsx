import {User} from "../types/User.ts";
import {FC} from "react";

interface UserComponentProps {
    user: User
}

export const UserComponent: FC<UserComponentProps> = ({user}) => {
    return (
        <div className='sticky-note'>
            {user.name}
        </div>
    );
};