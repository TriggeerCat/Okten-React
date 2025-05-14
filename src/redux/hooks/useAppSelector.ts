import {useSelector} from "react-redux";
import {RootType} from "../../types/RootType.ts";

export const useAppSelector = useSelector.withTypes<RootType>()