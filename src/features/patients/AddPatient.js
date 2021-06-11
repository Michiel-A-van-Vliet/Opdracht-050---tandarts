import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPatient } from "./patientsSlice";

function AddPatient() {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    birthYear: "",
    telephone: "",
    email: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addPatient({
        firstName: state.firstName,
        lastName: state.lastName,
        birthYear: state.birthYear,
        telephone: state.telephone,
        email: state.email,
      })
    );
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="firstName"
        placeholder="Voornaam"
        type="text"
        value={state.firstName.value}
        onChange={handleChange}
      />
      <input
        name="lastName"
        placeholder="Achternaam"
        type="text"
        value={state.lastName.value}
        onChange={handleChange}
      />
      <input
        name="birthYear"
        placeholder="Geboortejaar"
        type="text"
        value={state.birthYear.value}
        onChange={handleChange}
      />
      <input
        name="telephone"
        placeholder="Telefoonnummer"
        type="text"
        value={state.telephone.value}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email adres"
        type="text"
        value={state.email.value}
        onChange={handleChange}
      />
      <button type="submit">Add Patient</button>
    </form>
  );
}

export default AddPatient;
