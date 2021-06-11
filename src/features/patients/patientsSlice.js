import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    firstName: "Piet",
    lastName: "Pietersen",
    birthYear: "1901",
    telephone: "0612345678",
    email: "pietpietersen@zeurpiet.nl",
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
