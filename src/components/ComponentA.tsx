import {ComponentAA} from "./ComponentAA.tsx";
import {ComponentAB} from "./ComponentAB.tsx";

export const ComponentA = () => {
    return (
        <div className='text-xl m-1'>
            <ComponentAA/>
            <ComponentAB/>
        </div>
    );
};