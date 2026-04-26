import { useMediaQuery, useTheme } from '@mui/material';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'shared/SharedModels';
/* 
    Typed useDispatch and useSelector which gives the slices and their properties
    when used instead of plain `useDispatch` and `useSelector`.
*/
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function dispatchJsThunk(dispatch: AppDispatch, thunkCreator: (...args: any[]) => any, ...args: any[]) {
  return dispatch(thunkCreator(...args));
}

/*
    Using useTheme in combination with useMediaQuery hook to check current screen size.
*/
export const IsMdScreen = () => {
  return useMediaQuery(useTheme().breakpoints.down('lg'));
};
export const IsSmScreen = () => {
  return useMediaQuery(useTheme().breakpoints.down('md'));
};
export const IsXsScreen = () => {
  return useMediaQuery(useTheme().breakpoints.down('sm'));
};
export const IsLgScreen = () => {
  return useMediaQuery(useTheme().breakpoints.up('lg'));
};
