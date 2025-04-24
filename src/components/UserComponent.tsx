import {FC} from "react";
import {Users} from "../types/Users.ts";
import {useNavigate, useSearchParams} from "react-router-dom";

type PropType = { user: Users }

const UserComponent: FC<PropType> = ({user}) => {
    const navigate = useNavigate();
    const [query] = useSearchParams();

    const handleOnClick = () => {
        navigate('info/' + user.id.toString(), {state: {bank: user.bank, page: query.get('page')}});
    }

    return (
        <div className='w-1/2 m-1'>
            <span className='text-2xl'>{user.firstName} {user.maidenName} {user.lastName}</span>
            <button onClick={handleOnClick} className='mx-2 border-2 text-xl p-1'>Details</button>
        </div>
    );
};

export default UserComponent;