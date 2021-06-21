import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    firstName: "Trees",
    lastName: "Jansma",
    birthYear: "1903",
    telephone: "0906069069",
    email: "treesjansma@tandarts.nl",
    isSick: false,
  },
];

export const assistantsSlice = createSlice({
  name: "assistants",
  initialState,
  reducers: {
    addAssistant: (state, action) => {
      const newAssistant = {
        id: Date.now(),
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        birthYear: action.payload.birthYear,
        telephone: action.payload.telephone,
        email: action.payload.email,
        isSick: false,
      };
      state.push(newAssistant);
    },
    toggleIsSickAssistant: (state, action) => {
      const index = state.findIndex(
        (dentist) => dentist.id === action.payload.id
      );
      state[index].isSick = action.payload.isSick;
    },
  },
});

export const assistantsList = (state) => state.assistants;

// export reducers
export const { addAssistant, toggleIsSickAssistant } = assistantsSlice.actions;

export default assistantsSlice.reducer;
