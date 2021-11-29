import React from "react";

function ResidenceList(props) {
  let list = props.residents.map((v, i) => {
    return <li key={"item" + i}>{v}</li>;
  });
  return (
    <div>
      <div className="input-wrapper">
        <ul className="list">{list}</ul>
      </div>
    </div>
  );
}
export default ResidenceList;
