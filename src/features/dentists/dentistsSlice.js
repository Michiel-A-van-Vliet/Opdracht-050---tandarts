import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    firstName: "Jan",
    lastName: "Janssen",
  },
];

export const dentistsSlice = createSlice({
  name: "dentists",
  initialState,
  reducers: {
    // insert reducers here
  },
});

export const dentistsList = (state) => state.dentists;

// export reducers
// export const { **insert reducer** } = dentistsSlice.actions;

export default dentistsSlice.reducer;
