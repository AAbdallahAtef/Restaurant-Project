import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getCategories = createAsyncThunk("menu/Categories", async () => {
    const res = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    return res.data
})

const categoriesSlice = createSlice({
    name: "categories",
    initialState: { categories: [] },
    extraReducers: (builder) => {
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload.categories;
        })
        builder.addCase(getCategories.rejected, (state, action) => {
            state.categories = "No Data";
        })
    }
})
export default categoriesSlice.reducer