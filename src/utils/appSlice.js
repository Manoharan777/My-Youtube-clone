import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState: {
        isMenuOpen : true,
        searchquery : "",
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu : (state) => {
            state.isMenuOpen = false;
        },
        searchdata : (state,actions) => {
            state.searchquery = actions.payload;
        }
    }
})
export const { toggleMenu, closeMenu, searchdata } = appSlice.actions;
export default appSlice.reducer;