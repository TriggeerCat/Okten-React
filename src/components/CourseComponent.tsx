import {FC} from "react";
import {Course} from "../data/course.ts";

export const CourseComponent: FC<Course> = ({title, monthDuration, hourDuration, modules}) => {
    return (
        <div className='stickyNote my-10 p-1'>
            <h1 className='mx-8 my-4 text-2xl'>{title}</h1>
            <p className='m-2'>Duration: in months: {monthDuration}, in hours: {hourDuration}</p>
            <p className='m-2'>Modules:</p>
            <ul className='mx-10 my-4'>
                {
                    modules.map(value => <li className='list-decimal'>{value}</li>)
                }
            </ul>
        </div>
    )
}