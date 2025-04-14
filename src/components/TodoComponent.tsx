import {Todo} from "../types/todo.ts";
import {FC} from "react";

type PropType = { todo: Todo }

export const TodoComponent: FC<PropType> = ({todo}) => {
    return (
        <div className='sticky-note'>
            <p className='text-xl'>{todo.userId}.</p>
        </div>
    )
}