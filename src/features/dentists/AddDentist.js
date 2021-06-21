import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDentist } from "./dentistsSlice";

function AddDentist() {
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
      addDentist({
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
        type="number"
        value={state.birthYear.value}
        onChange={handleChange}
      />
      <input
        name="telephone"
        placeholder="Telefoonnummer"
        type="tel"
        value={state.telephone.value}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email adres"
        type="email"
        value={state.email.value}
        onChange={handleChange}
      />
      <button type="submit">Add Dentist</button>
    </form>
  );
}

export default AddDentist;
