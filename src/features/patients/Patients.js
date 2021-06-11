import React from "react";
import { useSelector } from "react-redux";
import AddPatient from "./AddPatient";
import PatientsList from "./PatientsList";

const Patients = () => {
  //   const allPatients = useSelector((state) => state.patients);

  return (
    <main>
      <h2>Patiënten</h2>
      {/* <AddPatient /> */}
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Voornaam</th>
            <th>Achternaam</th>
            <th>Geboortejaar</th>
          </tr>
        </thead>
        {/* <PatientsList patients={allPatients} /> */}
        <PatientsList />
      </table>
    </main>
  );
};

export default Patients;
