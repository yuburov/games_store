import { AppDispatch, RootState } from "src/redux/store/store";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
