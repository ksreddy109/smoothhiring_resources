import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IBreadcrumbDictionary, IBreadcrumbLabelRegistry, IBreadcrumbState, TBreadcrumbNavigation } from './app-model';

const initialBreadcrumbState: IBreadcrumbState = {
  availableBreadcrumbs: [],
};

const breadcrumbSlice = createSlice({
  name: 'breadcrumb',
  initialState: initialBreadcrumbState,
  reducers: {
    setCurrentBreadCrumb: (state, action: PayloadAction<{ breadcrumb: IBreadcrumbDictionary }>) => {
      state.currentBreadcrumb = action.payload.breadcrumb;
    },
    setBreadcrumbNavFrom: (state, action: PayloadAction<{ breadcrumbNav: TBreadcrumbNavigation }>) => {
      state.breadcrumbNavFrom = action.payload.breadcrumbNav;
    },
    setBreadcrumbLabelRegistry: (state, action: PayloadAction<{ labelReg: IBreadcrumbLabelRegistry }>) => {
      state.breadcrumbLabelRegistry = { ...state.breadcrumbLabelRegistry, ...action.payload.labelReg };
    },
    clearBreadcrumbLabelRegistry: state => {
      state.breadcrumbLabelRegistry = undefined;
    },
  },
});

export const { setCurrentBreadCrumb, setBreadcrumbNavFrom, clearBreadcrumbLabelRegistry, setBreadcrumbLabelRegistry } = breadcrumbSlice.actions;
export default breadcrumbSlice;
