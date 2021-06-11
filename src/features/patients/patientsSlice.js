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
    addPatient: (state, action) => {
      const newPatient = {
        id: Date.now(),
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        birthYear: action.payload.birthYear,
        telephone: action.payload.telephone,
        email: action.payload.email,
      };
      state.push(newPatient);
    },
  },
});

export const patientsList = (state) => state.patients;

// export reducers
export const { addPatient } = patientsSlice.actions;

export default patientsSlice.reducer;
