import { configureStore } from "@reduxjs/toolkit";
import dentistsReducer from "../features/dentists/dentistsSlice";
import patientsReducer from "../features/patients/patientsSlice";

export const store = configureStore({
  reducer: {
    dentists: dentistsReducer,
    patients: patientsReducer,
  },
});
