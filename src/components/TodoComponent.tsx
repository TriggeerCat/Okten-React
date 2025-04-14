import {Todo} from "../types/todo.ts";
import {FC} from "react";

type PropType = { todo: Todo }

export const TodoComponent: FC<PropType> = ({todo}) => {
    return (
        <div className='sticky-note px-1 py-4'>
            <p>{todo.userId}. ({todo.completed ? 'Completed' : 'Uncompleted'})</p>
            <p className='text-2xl mx-10 my-5'>{todo.title}.</p>
            <p className='text-xl mx-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur consequuntur cum cupiditate fuga laborum maiores minus nulla qui rem vel? At itaque, magni odio officiis sequi suscipit tempora tempore ullam!</p>
        </div>
    )
}