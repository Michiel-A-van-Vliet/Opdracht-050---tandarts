import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    firstName: "Piet",
    lastName: "Pietersen",
  },
];

export const patientsSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    // insert reducers here
  },
});

export const patientsList = (state) => state.patients;

// export reducers
// export const { **insert reducer** } = patientsSlice.actions;

export default patientsSlice.reducer;
