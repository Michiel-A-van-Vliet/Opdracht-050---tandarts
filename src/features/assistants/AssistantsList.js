import React from "react";
import { useSelector } from "react-redux";
import AssistantsListItem from "./AssistantsListItem";
// import { assistantsList } from "./assistantsSlice";

const AssistantsList = () => {
  const assistants = useSelector((state) => state.assistants);

  return (
    <tbody>
      {assistants.map((assistant) => (
        <AssistantsListItem
          key={assistant.id}
          id={assistant.id}
          firstName={assistant.firstName}
          lastName={assistant.lastName}
          birthYear={assistant.birthYear}
          telephone={assistant.telephone}
          email={assistant.email}
          isSick={assistant.isSick}
        />
      ))}
    </tbody>
  );
};

export default AssistantsList;
