import React from "react";
// import { useSelector } from "react-redux";
import AddPatient from "./AddPatient";
import PatientsList from "./PatientsList";

const Patients = () => {
  return (
    <main>
      <h2>Patiënten</h2>
      <AddPatient />
      <hr />
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Voornaam</th>
            <th>Achternaam</th>
            <th>Geboortejaar</th>
            <th>Telefoon</th>
            <th>Email</th>
            {/* <th>Ziek?</th> */}
          </tr>
        </thead>
        <PatientsList />
      </table>
    </main>
  );
};

export default Patients;
