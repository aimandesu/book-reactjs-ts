import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DrawerClass } from "../../../data/drawerClass";

export interface DrawerState {
  currentContent: DrawerClass | null;
}

const initialState: DrawerState = {
  currentContent: {
    Option_name: "",
    Content: null,
  },
};

const drawerSlice: any = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    setContent: (state, action: PayloadAction<DrawerClass>) => {
      state.currentContent = action.payload;
    },
  },
});

export const { setContent } = drawerSlice.actions;
export default drawerSlice.reducer;
