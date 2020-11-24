import React from "react";
import "./App.css";

export default function References({ references }) {
  const mapReferences = (references) => {
    return references.map((ref) => {
      if (ref && ref.fields && ref.fields.caveName) {
        const { caveName, min, max, ac } = ref.fields;
        return (
          <tr key={caveName}>
            <td>{caveName}</td>
            <td>{min}</td>
            <td>{max}</td>
            <td>{ac}</td>
          </tr>
        );
      } else {
        return null;
      }
    });
  };
  return (
    <div className="cave-stats">
      <table>
        <tbody>
          <tr>
            <th>Cave[Room]</th>
            <th>Min Vita</th>
            <th>Max Vita</th>
            <th>Base AC</th>
          </tr>
          {mapReferences(references)}
        </tbody>
      </table>
    </div>
  );
}
