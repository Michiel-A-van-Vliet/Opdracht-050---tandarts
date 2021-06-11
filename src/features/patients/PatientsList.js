import React from "react";
import { useSelector } from "react-redux";
import PatientsListItem from "./PatientsListItem";
import { patientsList } from "./patientsSlice";
// import { patientsList } from "./patientsSlice";

const PatientsList = () => {
  const patients = useSelector((state) => state.patients);

  return (
    <tbody>
      {patients.map((patient) => (
        <PatientsListItem
          key={patient.id}
          id={patient.id}
          firstName={patient.firstName}
          lastName={patient.lastName}
          birthYear={patient.birthYear}
        />
      ))}
    </tbody>
  );
};

export default PatientsList;
