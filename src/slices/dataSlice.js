import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RESTAURANT_LIST_URL } from "../utils/constants";

const initialState = {
    restaurants: [],
    filteredRestaurants: [],
    loading: false, 
    searchTerm: "",
}

//Fetching Cards data.
export const fetchRestaurantDataThunk = createAsyncThunk("data/fetchRestaurantCardData", 
    async () => {
        try {
            const data = await fetch(RESTAURANT_LIST_URL);
            const jsonData = await data.json();
            const actualData = await JSON.parse(jsonData.contents);
            // console.log("Cards: ", actualData);
            const restaurantList = actualData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
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
        filterAll: (state) => {
            state.filteredRestaurants = state.restaurants;
        },
        filterTopRated: (state) => { 
            state.filteredRestaurants = state.restaurants.filter((item) => item.info.avgRating >= 4.5)
        },
        filterFastDelivery: (state) => { 
            state.filteredRestaurants = state.restaurants.filter((item) => item.info.sla.deliveryTime <= 30)
        },
        filterPureVeg: (state) => { 
            state.filteredRestaurants = state.restaurants.filter((item) => item.info.veg === true)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRestaurantDataThunk.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchRestaurantDataThunk.fulfilled, (state, action) => {
            state.restaurants = action.payload;
            state.filteredRestaurants = action.payload;
            state.loading = false;
        })
        .addCase(fetchRestaurantDataThunk.rejected, (state) => {
            state.loading = false;
        });
    },
});

export const { updateSearchTerm, filterAll, filterTopRated, filterFastDelivery, filterPureVeg } = dataSlice.actions;
export default dataSlice.reducer;