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
            const data = await fetch("https://proxy.cors.sh/"+RESTAURANT_LIST_URL, {
                headers: {
                    "x-cors-api-key": import.meta.env.VITE_API_KEY
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
        builder.addCase(fetchRestaurantDataThunk.pending, (state, action) => {
            state.loading = true;
            console.log("hello from thunk: ", state.loading = true);

        })
        .addCase(fetchRestaurantDataThunk.fulfilled, (state, action) => {
            state.restaurants = action.payload;
            state.filteredRestaurants = action.payload;
            state.loading = false;
            console.log("hello from thunk: ", state.loading = false);
            console.log("Restaurant Data fetched successfully: ", action.payload);
        })
        .addCase(fetchRestaurantDataThunk.rejected, (state, action) => {
            state.loading = false;
            console.log("hello from thunk: ", state.loading = false);
            console.log("Failed to fetch restautant data: ", action.error);
        });
    },
});

export const { updateSearchTerm } = dataSlice.actions;
export default dataSlice.reducer;

//TODO: Add filters 