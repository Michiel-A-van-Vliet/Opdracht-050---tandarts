import React from "react";
import { useDispatch } from "react-redux";
// import { removeDentist } from "./dentistsSlice" ;
import { toggleIsSick } from "./dentistsSlice";

const DentistsListItem = ({
  firstName,
  lastName,
  birthYear,
  id,
  telephone,
  email,
  isSick,
}) => {
  const dispatch = useDispatch();

  const handleIsSickChange = () => {
    dispatch(toggleIsSick({ id: id, isSick: !isSick }));
  };

  return (
    <tr id={id}>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{birthYear}</td>
      <td>{telephone}</td>
      <td>{email}</td>
      <td>
        <input type="checkbox" checked={isSick} onChange={handleIsSickChange} />
      </td>
    </tr>
  );
};

export default DentistsListItem;
