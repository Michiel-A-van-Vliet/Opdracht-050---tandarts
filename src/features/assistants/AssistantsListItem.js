import React from "react";
import { useDispatch } from "react-redux";
// import { removeAssistant } from "./assistantsSlice" ;
import { toggleIsSickAssistant } from "./assistantsSlice";

const AssistantsListItem = ({
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
    dispatch(toggleIsSickAssistant({ id: id, isSick: !isSick }));
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

export default AssistantsListItem;
