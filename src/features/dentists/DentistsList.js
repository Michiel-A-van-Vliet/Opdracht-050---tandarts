import React from "react";
import { useSelector } from "react-redux";
import DentistsListItem from "./DentistsListItem";
// import { dentistsList } from "./dentistsSlice";

const DentistsList = () => {
  const dentists = useSelector((state) => state.dentists);

  return (
    <tbody>
      {dentists.map((dentist) => (
        <DentistsListItem
          key={dentist.id}
          id={dentist.id}
          firstName={dentist.firstName}
          lastName={dentist.lastName}
          birthYear={dentist.birthYear}
          telephone={dentist.telephone}
          email={dentist.email}
        />
      ))}
    </tbody>
  );
};

export default DentistsList;
