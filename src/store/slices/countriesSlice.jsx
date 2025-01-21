// src/store/slices/countriesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    const response = await axios.get('https://restcountries.com/v2/all?fields=name,region,flag');
    return response.data;
  }
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    items: [],
    filteredItems: [],
    loading: false,
    error: null,
    selectedRegion: 'all'
  },
  reducers: {
    filterByRegion: (state, action) => {
      const region = action.payload.toLowerCase();
      state.selectedRegion = region;
      state.filteredItems = region === 'all' 
        ? state.items 
        : state.items.filter(country => 
            country.region.toLowerCase() === region
          );
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.filteredItems = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { filterByRegion } = countriesSlice.actions;
export default countriesSlice.reducer;