import {useSelector as useReduxSelector, useDispatch as useReducerDispatch, TypedUseSelectorHook} from "react-redux";
import {RootState} from "./index";

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch = useReducerDispatch
