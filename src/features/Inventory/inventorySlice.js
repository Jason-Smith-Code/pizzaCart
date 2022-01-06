import { createSlice } from '@reduxjs/toolkit';

// My inventory is using a filter system, so i need to include the default state of the selected category here
// I also need to include the filter category reducer to provide changes to product listing

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState:{
        selectedCategory: 'All'
    }, 
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
});

// store and export the current selected category
export const getSelectedCategory = state => state.inventory.selectedCategory;

// export actions (the reducers)
export const { filterCategory } = inventorySlice.actions;

// export the inventoryslice reducer
export default inventorySlice.reducer;
