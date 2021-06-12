import { configureStore } from "@reduxjs/toolkit";
import dentistsReducer from "../features/dentists/dentistsSlice";
import patientsReducer from "../features/patients/patientsSlice";
import assistantsReducer from "../features/assistants/assistantsSlice";

export const store = configureStore({
  reducer: {
    dentists: dentistsReducer,
    patients: patientsReducer,
    assistants: assistantsReducer,
  },
});
