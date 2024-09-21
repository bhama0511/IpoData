// src/redux/ipoSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch IPO data
export const fetchIpoData = createAsyncThunk('ipo/fetchIpoData', async () => {
  const response = await axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=_m9xj6WjDeMy6hacLXB7ELxY4gtVsGW5uAfU35F5104qe56bvfJZX7PymM_cKV0XcJdJIp0tgbnNLygM8x4DvWADHFzbz11wm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPZPVyBS_2PIWPNscTqBMGopV28GuDLgXFo2Bfi-ks77VuAhINsX70qTGsQPcAPpt2aSvNWD31pjTlGE04urrJ-b9JiC1qRxaQ&lib=Micsi0aperP7GxlGU8RzycnwYZiX0HLjJ');
  return response.data.data; // Assuming the data is in `data.data`
});

const ipoSlice = createSlice({
  name: 'ipo',
  initialState: {
    ipoData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIpoData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchIpoData.fulfilled, (state, action) => {
        state.loading = false;
        state.ipoData = action.payload;
      })
      .addCase(fetchIpoData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ipoSlice.reducer;
