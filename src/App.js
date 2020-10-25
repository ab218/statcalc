import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import "./App.css";
import Output from "./Output";
import Stats from "./Stats";
import Target from "./Target";
import EXP from "./Experience";
import References from "./References";

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
    const client = createClient({
      space: "amldgun4xhvi",
      accessToken: "4KiihzlnARD72q4Eaaik6KOI-citECC6Db7UJYWT_0A",
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
    const vCost = Math.floor(
      Math.floor(value / 20000) * 4 - (Math.floor(value / 20000) - 6) * 2,
    );
    const vSells = Math.floor(value / 100);
    const vSegments = Math.floor((vSells - 1000) / 200);
    if (value < 100000) {
      return (value / 100) * 20;
    } else if (value >= 100000) {
      return (
        vSells * 20 +
        ((2 * vSegments + 20 + 22) / 2 - 20) * (vSegments * 200) +
        (vSells - 1000 - vSegments * 200) * (vCost - 20)
      );
    } else {
      return null;
    }
  };

  const calculateExpForMana = (value) => {
    const mCost = Math.floor(
      Math.floor(value / 10000) * 4 - (Math.floor(value / 10000) - 6) * 2,
    );
    const mSells = Math.floor(value / 50);
    const mSegments = Math.floor((mSells - 1000) / 200);
    if (value < 50000) {
      return (value / 50) * 20;
    } else if (value >= 50000) {
      return (
        mSells * 20 +
        ((2 * mSegments + 20 + 22) / 2 - 20) * (mSegments * 200) +
        (mSells - 1000 - mSegments * 200) * (mCost - 20)
      );
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
          <h3>Reference</h3>
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
    if (window && window.localStorage) {
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
