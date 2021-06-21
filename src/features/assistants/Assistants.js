import React from "react";
// import { useSelector } from "react-redux";
import AddAssistant from "./AddAssistant";
import AssistantsList from "./AssistantsList";

const Assistants = () => {
  return (
    <main>
      <h2>Assistenten</h2>
      <AddAssistant />
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
        <AssistantsList />
      </table>
    </main>
  );
};

export default Assistants;
