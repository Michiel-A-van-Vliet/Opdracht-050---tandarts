import React from "react";
// import { useDispatch } from "react-redux";
// import { removePatient } from "./patientsSlice" ;

const PatientsListItem = ({
  firstName,
  lastName,
  birthYear,
  id,
  telephone,
  email,
}) => {
  // const dispatch = useDispatch();

  return (
    <tr id={id}>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{birthYear}</td>
      <td>{telephone}</td>
      <td>{email}</td>
      {/* <td>
        <button>Verwijder afspraken</button>
      </td> */}
    </tr>
  );
};

export default PatientsListItem;
