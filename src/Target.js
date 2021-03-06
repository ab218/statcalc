import React from "react";
import "./App.css";

export default function Target({
  ac,
  addSleep,
  addSc,
  addDh,
  dh,
  resetFields,
  sc,
  sleep,
  setAc,
}) {
  return (
    <div className="target">
      <div className="checkboxes">
        <div className="sleep-box">
          <h5 className={"title"}>Add Sleep</h5>
          <input type="checkbox" checked={sleep} onChange={addSleep} />
        </div>
        <div className="sc-box">
          <h5 className={"title"}>Add Sc</h5>
          <input type="checkbox" checked={sc} onChange={addSc} />
        </div>
        <div className="dh-box">
          <h5 className={"title"}>Add DH</h5>
          <input type="checkbox" checked={dh} onChange={addDh} />
        </div>
      </div>
      <div className="AC">
        <h4 className={"title"}>Target AC</h4>
        <input
          style={{ width: "5vw" }}
          value={ac}
          onChange={(e) => setAc(e.target.value)}
        />
      </div>
      <div className="cave-buttons">
        <h4 className={"title"}>Reset Fields</h4>
        <button onClick={resetFields}>Reset</button>
      </div>
    </div>
  );
}
