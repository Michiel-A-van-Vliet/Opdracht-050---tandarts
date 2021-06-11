import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    firstName: "Jan",
    lastName: "Janssen",
    birthYear: "1902",
    telephone: "0623456789",
    email: "janjanssen@tandarts.nl",
  },
];

export const dentistsSlice = createSlice({
  name: "dentists",
  initialState,
  reducers: {
    addDentist: (state, action) => {
      const newDentist = {
        id: Date.now(),
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        birthYear: action.payload.birthYear,
        telephone: action.payload.telephone,
        email: action.payload.email,
      };
      state.push(newDentist);
    },
  },
});

export const dentistsList = (state) => state.dentists;

// export reducers
export const { addDentist } = dentistsSlice.actions;

export default dentistsSlice.reducer;
