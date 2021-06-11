import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./features/home/Home";
import Calendar from "./features/calendar/Calendar";
import Day from "./features/day/Day";

import generateRandomAppointments from "./utils/utils";
import Patients from "./features/patients/Patients";
import Dentists from "./features/dentists/Dentists";

const appointments = generateRandomAppointments(70);
// console.log(appointments);

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calendar">Calendar view</Link>
          </li>
          <li>
            <Link to="/day">Day view</Link>
          </li>
          <li>
            <Link to="/patients">Patiënten</Link>
          </li>
          <li>
            <Link to="/dentists">Tandartsen</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <div>
        <Switch>
          <Route path="/calendar">
            <Calendar appointments={appointments} />
          </Route>
          <Route path="/day">
            <Day appointments={appointments.filter((app) => app.day === 1)} />
          </Route>
          <Route path="/patients">
            <Patients />
          </Route>
          <Route path="/dentists">
            <Dentists />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
);
export default App;
