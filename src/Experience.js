import React from "react";
import "./App.css";

export default function Exp({
  vitaExp,
  manaExp,
  desiredVitaExp,
  desiredManaExp,
}) {
  return (
    <div className="exp">
      <div>
        {desiredVitaExp > vitaExp &&
          `EXP to desired vita: ${
            ((desiredVitaExp - vitaExp) / 1000).toFixed(5) / 1
          }bil`}
      </div>
      <div>
        {desiredManaExp > manaExp &&
          `EXP to desired mana: ${
            ((desiredManaExp - manaExp) / 1000).toFixed(5) / 1
          }bil`}
      </div>
    </div>
  );
}
