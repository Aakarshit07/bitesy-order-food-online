import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RESTAURANT_LIST_URL } from "../utils/constants";

const initialState = {
    restaurants: [],
    filteredRestaurants: [],
    searchTerm: "",
}

//Fetching Cards data.
export const fetchRestaurantDataThunk = createAsyncThunk("data/fetchRestaurantCardData", 
    async () => {
        try {
            const data = await fetch("https://proxy.cors.sh/"+RESTAURANT_LIST_URL, {
                headers: {
                    "x-cors-api-key": "temp_fefa7c5e73b4f9291612e290cf337b9d"
                }
            });
            const jsonData = await data.json();
            // const carouselData = jsonData?.data?.cards[0]?.card?.card
            const restaurantList = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            return restaurantList;
        } catch (error) {
            console.log("Failed to Fetch Restaurant List", error);
        }
    }
);


const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        updateSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
            state.filteredRestaurants = state.restaurants.filter((restaurant) => 
                restaurant.info.name.toLowerCase().includes(action.payload.toLowerCase().trim())
            );
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRestaurantDataThunk.fulfilled, (state, action) => {
            state.restaurants = action.payload;
            state.filteredRestaurants = action.payload;
            console.log("Restaurant Data fetched successfully: ", action.payload);
        })
        .addCase(fetchRestaurantDataThunk.rejected, (state, action) => {
            console.log("Failed to fetch restautant data", action.error);
        });
    },
});

export const { updateSearchTerm } = dataSlice.actions;
export default dataSlice.reducer;

//TODO: Add filters 