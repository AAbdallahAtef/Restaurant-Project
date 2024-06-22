import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

export const getMenuItems = createAsyncThunk("menu/menuItems", async (categoryName) => {
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
    return res.data
})

const menuSlice = createSlice({
    name: "menuItems",
    initialState: { menuItems: [] },
    extraReducers: (builder) => {
        builder.addCase(getMenuItems.fulfilled, (state, action) => {
            state.menuItems = action.payload.meals;
        })
        builder.addCase(getMenuItems.rejected, (state, action) => {
            state.menuItems = "No Data"
        })
    }
})
export default menuSlice.reducer