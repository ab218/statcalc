import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import OtherLinks from "./OtherLinks";
import "./App.css";
import Output from "./Output";
import Stats from "./Stats";
import Target from "./Target";
import EXP from "./Experience";
import References from "./References";
const CONTENTFUL_ACCESS_TOKEN = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;
const CONTENTFUL_SPACE = process.env.REACT_APP_CONTENTFUL_SPACE;

export default function App() {
  const [ac, setAc] = useState("-76"),
    [vita, setVita] = useState("0"),
    [mana, setMana] = useState("0"),
    [desiredVita, setDesiredVita] = useState("0"),
    [desiredMana, setDesiredMana] = useState("0"),
    [vitaExp, setVitaExp] = useState("0"),
    [manaExp, setManaExp] = useState("0"),
    [desiredVitaExp, setDesiredVitaExp] = useState("0"),
    [desiredManaExp, setDesiredManaExp] = useState("0"),
    [dh, setDh] = useState(false),
    [sc, setSc] = useState(false),
    [sleep, setSleep] = useState(false),
    [references, setReferences] = useState([]);

  useEffect(() => {
    if (!CONTENTFUL_ACCESS_TOKEN || !CONTENTFUL_SPACE) {
      return;
    }
    const client = createClient({
      space: CONTENTFUL_SPACE,
      accessToken: CONTENTFUL_ACCESS_TOKEN,
    });
    client
      .getEntries()
      .then((response) => {
        const found = response.items.find((item) =>
          item.fields.hasOwnProperty("list"),
        );
        setReferences(found.fields.list);
      })
      .catch(console.error);
  }, []);

  const addDebuff = (debuff, addDebuff, debuffAmount) => {
    setAc((prevAc) =>
      debuff
        ? (parseInt(prevAc) - debuffAmount).toString()
        : (parseInt(prevAc) + debuffAmount).toString(),
    );
    addDebuff(!debuff);
  };

  const resetFields = () => {
    setAc("-76");
    setSleep(false);
    setDh(false);
    setSc(false);
  };

  const calculateExpForVita = (value) => {
    const vitaUnit = 100;
    const fraction = Number(value.slice(-2)) / 1000;
    const vitaSells = Math.floor(Number(value) / vitaUnit);
    // Every 20k after 100k is 1 "segment"
    const vitaSegments = Math.floor((vitaSells - 1000) / 200);
    const costUntil100k = (Number(value) / 100) * 20;
    const vitaUnitCostOver100k = 20 + (vitaSegments + 1) * 2;
    const partial = (vitaSells - 1000 - vitaSegments * 200) / 10;

    let counter = 0;
    for (let i = 0; i <= vitaSegments; i++) {
      const vitaUnitCost = 20 + (i + 1) * 2;
      if (i === vitaSegments) {
        counter += vitaUnitCost * partial;
      } else {
        counter += vitaUnitCost * 20;
      }
    }
    counter += fraction * vitaUnitCostOver100k;
    counter *= 10;
    if (Number(value) <= 100000) {
      return costUntil100k;
    } else if (Number(value) > 100000) {
      return counter + 20000;
    } else {
      return null;
    }
  };

  const calculateExpForMana = (value) => {
    const manaUnit = 50;
    const fraction =
      Number(value.slice(-2)) >= 50
        ? (Number(value.slice(-2)) - 50) / 1000
        : Number(value.slice(-2)) / 1000;
    const manaSells = Math.floor(Number(value) / manaUnit);
    // Every 10k after 50k is 1 "segment"
    const manaSegments = Math.floor((manaSells - 1000) / 200);
    const manaUntil50k = (Number(value) / 50) * 20;
    const manaUnitCostOver50k = 20 + (manaSegments + 1) * 2;
    const partial = (manaSells - 1000 - manaSegments * 200) / 10;

    let counter = 0;
    for (let i = 0; i <= manaSegments; i++) {
      const manaUnitCost = 20 + (i + 1) * 2;
      if (i === manaSegments) {
        counter += manaUnitCost * partial;
      } else {
        counter += manaUnitCost * 20;
      }
    }
    counter += fraction * manaUnitCostOver50k * 2;
    counter *= 10;
    if (Number(value) <= 50000) {
      return manaUntil50k;
    } else if (Number(value) > 50000) {
      return counter + 20000;
    } else {
      return null;
    }
  };

  const handleVita = (value) => {
    setVita(value.replace(/[^\d,]+/g, ""));
    setVitaExp(calculateExpForVita(value));
  };

  const handleMana = (value) => {
    setMana(value.replace(/[^\d,]+/g, ""));
    setManaExp(calculateExpForMana(value));
  };

  const handleDesiredVita = (value) => {
    setDesiredVita(value.replace(/[^\d,]+/g, ""));
    setDesiredVitaExp(calculateExpForVita(value));
  };

  const handleDesiredMana = (value) => {
    setDesiredMana(value.replace(/[^\d,]+/g, ""));
    setDesiredManaExp(calculateExpForMana(value));
  };

  const withSleep = () => (sleep ? 1.3 : 1);

  const loadStats = (stats) => {
    const { vita, mana, desiredVita, desiredMana, sc, dh, sleep, ac } = stats;
    setVita(vita);
    setMana(mana);
    setDesiredMana(desiredMana);
    setDesiredVita(desiredVita);
    setSc(sc);
    setDh(dh);
    setSleep(sleep);
    setAc(ac);
  };

  return (
    <div className="App">
      <OtherLinks />
      <Stats
        vita={vita}
        mana={mana}
        desiredVita={desiredVita}
        desiredMana={desiredMana}
        handleVita={(e) => handleVita(e.target.value)}
        handleMana={(e) => handleMana(e.target.value)}
        handleDesiredVita={(e) => handleDesiredVita(e.target.value)}
        handleDesiredMana={(e) => handleDesiredMana(e.target.value)}
      />
      <SaveLoad
        vita={vita}
        mana={mana}
        desiredMana={desiredMana}
        desiredVita={desiredVita}
        loadStats={loadStats}
        sc={sc}
        dh={dh}
        sleep={sleep}
        ac={ac}
      />
      <Target
        ac={ac}
        addSc={() => addDebuff(sc, setSc, 50)}
        addDh={() => addDebuff(dh, setDh, 12)}
        addSleep={() => setSleep(!sleep)}
        sleep={sleep}
        dh={dh}
        resetFields={resetFields}
        sc={sc}
        setAc={setAc}
      />
      <EXP
        vitaExp={vitaExp}
        manaExp={manaExp}
        desiredVitaExp={desiredVitaExp}
        desiredManaExp={desiredManaExp}
      />
      <Output
        vita={vita.replace(/\D/g, "")}
        mana={mana.replace(/\D/g, "")}
        desiredVita={desiredVita.replace(/\D/g, "")}
        desiredMana={desiredMana.replace(/\D/g, "")}
        ac={ac}
        withSleep={withSleep}
      />
      {references.length > 0 && (
        <React.Fragment>
          <h3
            style={{ textDecoration: "underline", marginTop: "20px" }}
            className={"title"}
          >
            Reference
          </h3>
          <References references={references} />
        </React.Fragment>
      )}
    </div>
  );
}

const SaveLoad = ({
  vita,
  mana,
  desiredMana,
  desiredVita,
  dh,
  sc,
  sleep,
  ac,
  loadStats,
}) => {
  const save = () => {
    if (window && window.localStorage) {
      const stats = { vita, mana, desiredVita, desiredMana, sc, dh, sleep, ac };
      window.localStorage.setItem("stats", JSON.stringify(stats));
    } else {
      alert("local storage not supported");
    }
  };
  const load = () => {
    if (window && window.localStorage && window.localStorage.getItem("stats")) {
      return loadStats(JSON.parse(window.localStorage.getItem("stats")));
    } else {
      alert("local storage not supported");
    }
  };
  return (
    <div>
      <button onClick={save} style={{ margin: "1em 2em" }}>
        Save settings to local storage
      </button>
      <button onClick={load} style={{ margin: "1em 2em" }}>
        Load settings from local storage
      </button>
    </div>
  );
};
