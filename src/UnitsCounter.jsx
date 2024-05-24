import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import ResetButton from "./ResetButton";
import OnOffButton from "./OnOffButton";

const UnitsCounter = () => {
  console.log("UnitsCounter");
  const [units, setUnits] = useState(0);
  const [tens, setTens] = useState(0);
  const [hundreds, setHundreds] = useState(0);
  const [thousands, setThousands] = useState(0);
  const [tenThousands, setTenThousands] = useState(0);
  const [hundredThousands, setHundredThousands] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    if (!isRunning) return;
    console.log(isRunning);
    const interval = setInterval(() => {
      console.log("interval");
      setUnits((prevUnits) => {
        if (prevUnits === 9) {
          setTens((prevTens) => {
            if (prevTens === 9) {
              setHundreds((prevHundreds) => {
                if (prevHundreds === 9) {
                  setThousands((prevThousands) => {
                    if (prevThousands === 9) {
                      setTenThousands((prevtenThousands) => {
                        if (prevtenThousands === 9) {
                          setHundredThousands(
                            (prevHundredThousands) => prevHundredThousands + 1
                          );
                          return 0;
                        } else {
                          return prevtenThousands + 1;
                        }
                      });
                      return 0;
                    } else {
                      return prevThousands + 1;
                    }
                  });
                  return 0;
                } else {
                  return prevHundreds + 1;
                }
              });
              return 0;
            } else {
              return prevTens + 1;
            }
          });
          return 0;
        } else {
          return prevUnits + 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="flex h-24 bg-black text-center w-full justify-center gap-x-2.5">
      <Counter value={null}>
        <p>
          <i className="fa-regular fa-clock"></i>
        </p>
      </Counter>
      <Counter value={hundredThousands} />
      <Counter value={tenThousands} />
      <Counter value={thousands} />
      <Counter value={hundreds} />
      <Counter value={tens} />
      <Counter value={units} />
      <ResetButton
        setUnits={setUnits}
        setTens={setTens}
        setHundreds={setHundreds}
        setThousands={setThousands}
        setTenThousands={setTenThousands}
        setHundredThousands={setHundredThousands}
      />
      <OnOffButton
        isRunning={isRunning}
        toggleRunning={() => setIsRunning(!isRunning)}
      />
    </div>
  );
};

export default UnitsCounter;
