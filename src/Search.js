import React, { useState } from "react";
import { STUDENTS } from "./studentList.js";

function Search(props) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const handleClick = () => {
    let errorMsg = "";
    console.log(name, date, STUDENTS);
    let names = STUDENTS.map((v) => v.name);
    let studentnames = STUDENTS.map((v) => v.name.toUpperCase());
    let validDates = STUDENTS.map((v) => v.validity);
    console.log(studentnames, validDates);
    let isNamevalid = studentnames.indexOf(name.toUpperCase());
    if (isNamevalid === -1) {
      errorMsg = name + " is not a registered student!!";
    } else {
      let validityDate = validDates[isNamevalid];
      let isDateValid = checkValidity(date, validityDate);
      if (!isDateValid) {
        errorMsg = "Joining date is beyong valid date!!";
      }
      setName(names[isNamevalid]);
    }
    props.handleSubmit(errorMsg, name);
  };
  const checkValidity = (joiningDate, validityDate) => {
    let jDate = new Date(joiningDate.split("-").reverse().join("-"));
    let vDate = new Date(validityDate.split("-").reverse().join("-"));
    if (vDate < jDate) {
      return false;
    }
    return true;
  };
  return (
    <div className="wrapper">
      <div className="input-wrapper">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          id="name"
          className="form-text"
        />
      </div>
      <div className="input-wrapper">
        <label className="form-label" htmlFor="date">
          Joining Date
        </label>
        <input
          onChange={(e) => setDate(e.target.value)}
          id="date"
          type="date"
          className="form-text"
        />
      </div>
      <button onClick={handleClick} className="btn btn-primary" type="submit">
        Add
      </button>
    </div>
  );
}
export default Search;
