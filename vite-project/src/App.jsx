import { useState, useEffect } from "react";
import axios from "axios";
import diceIcon from "./assets/img/icon-dice.svg";
import divider from "./assets/img/pattern-divider-mobile.svg";

const App = () => {
  const ADVICE_URL = "https://api.adviceslip.com/advice";

  const [advice, setAdvice] = useState({});

  const fetchAdvice = async () => {
    setAdvice({});
    axios
      .get(ADVICE_URL)
      .then(({ data }) => {
        setAdvice(data.slip);
      })
      .catch((error) => {
        console.log(error);
        setAdvice({ id: 0, advice: "Sorry, there was an error" });
      });
  };

  useEffect(async () => {
    await fetchAdvice();
  }, []);

  return (
    <main>
      <div className="card">
        {Object.keys(advice).length === 0 ? (
          <h2 className="advice">Loading...</h2>
        ) : (
          <>
            <h1 className="header">Advice #{advice?.id}</h1>
            <h2 className="advice">{advice?.advice}</h2>
            <img src={divider} alt="" className="divider" />
            <button
              className="shuffle"
              onClick={() => {
                console.log("click");
                fetchAdvice();
              }}
            >
              <img src={diceIcon} alt="" className="divider" />
            </button>
          </>
        )}
      </div>
    </main>
  );
};

export default App;
