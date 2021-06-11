import React from "react";
import { useDispatch } from "react-redux";
// import { useDispatch } from "react-redux";
// import { removePatient } from "./patientsSlice" ;

const PatientsListItem = ({ firstName, lastName, birthYear, id }) => {
  // const dispatch = useDispatch();

  return (
    <tr id={id}>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{birthYear}</td>
    </tr>
  );
};

export default PatientsListItem;
