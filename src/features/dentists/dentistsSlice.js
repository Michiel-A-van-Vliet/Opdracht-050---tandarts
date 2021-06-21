import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    firstName: "Jan",
    lastName: "Janssen",
    birthYear: "1902",
    telephone: "0623456789",
    email: "janjanssen@tandarts.nl",
    isSick: false,
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
        isSick: false,
      };
      state.push(newDentist);
    },
    toggleIsSick: (state, action) => {
      const index = state.findIndex(
        (dentist) => dentist.id === action.payload.id
      );
      state[index].isSick = action.payload.isSick;
    },
  },
});

export const dentistsList = (state) => state.dentists;

// export reducers
export const { addDentist, toggleIsSick } = dentistsSlice.actions;

export default dentistsSlice.reducer;
