import { configureStore } from "@reduxjs/toolkit";
import MenuItemsReducer  from "./Slices/MenuItems";
import CatetgoriesReducer from "./Slices/Categories"
const store = configureStore({
    reducer:{
        menuItem:MenuItemsReducer,
        categories:CatetgoriesReducer
    }
})
export default store;