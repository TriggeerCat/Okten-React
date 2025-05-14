import {store} from "../redux/store.ts";

export type RootType = ReturnType<typeof store.getState>;