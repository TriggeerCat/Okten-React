import {UserInfoComponent} from "./UserInfoComponent.tsx";
import {HeaderTitleComponent} from "./HeaderTitleComponent.tsx";
import {SearchBarComponent} from "./SearchBarComponent.tsx";

export const HeaderComponent = () => {
    return (
        <div className='px-5 py-2 flex justify-between fixed bg-neutral-700 w-full'>
            <HeaderTitleComponent/>
            <SearchBarComponent/>
            <UserInfoComponent/>
        </div>
    );
};