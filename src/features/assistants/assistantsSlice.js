import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    firstName: "Trees",
    lastName: "Jansma",
    birthYear: "1903",
    telephone: "0906069069",
    email: "treesjansma@tandarts.nl",
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
      };
      state.push(newAssistant);
    },
  },
});

export const assistantsList = (state) => state.assistants;

// export reducers
export const { addAssistant } = assistantsSlice.actions;

export default assistantsSlice.reducer;
