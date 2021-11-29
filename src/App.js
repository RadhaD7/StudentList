import "./styles.css";
import Search from "./Search.js";
import ResidenceList from "./ResidenceList";
import ErrorUI from "./ErrorUi";
import { useState } from "react";

export default function App() {
  // let studentList = STUDENTS;
  let [residents, setResidents] = useState([]);
  let [errorMsg, setErrorMsg] = useState("");
  const handleSubmit = (error, name) => {
    if (error) {
      console.log(error);
      setErrorMsg(error);
    } else {
      console.log("no error");
      setErrorMsg("");
      if (!residents.includes(name)) {
        setResidents([...residents, name]);
      }
    }
    return;
  };
  return (
    <div className="App">
      <div>
        <Search handleSubmit={handleSubmit} />
        {!errorMsg && <ResidenceList residents={residents} />}
      </div>
      {errorMsg && <ErrorUI errorMsg={errorMsg} />}
    </div>
  );
}
