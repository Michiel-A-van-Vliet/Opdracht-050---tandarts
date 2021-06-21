import React from "react";
// import { useSelector } from "react-redux";
import AddDentist from "./AddDentist";
import DentistsList from "./DentistsList";

const Dentists = () => {
  return (
    <main>
      <h2>Tandartsen</h2>
      <AddDentist />
      <hr />
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Voornaam</th>
            <th>Achternaam</th>
            <th>Geboortejaar</th>
            <th>Telefoon</th>
            <th>Email</th>
            <th>Ziek?</th>
          </tr>
        </thead>
        <DentistsList />
      </table>
    </main>
  );
};

export default Dentists;
