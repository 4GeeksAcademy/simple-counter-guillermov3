import React, { useEffect, useState } from "react";
import Counter from "./Counter";

const UnitsCounter = () => {
  console.log("UnitsCounter");
  const [units, setUnits] = useState(0);
  const [tens, setTens] = useState(0);
  const [hundreds, setHundreds] = useState(0);
  const [thousands, setThousands] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    const interval = setInterval(() => {
      console.log("interval");
      setUnits((prevUnits) => {
        if (prevUnits === 9) {
          setTens((prevTens) => {
            if (prevTens === 9) {
              setHundreds((prevHundreds) => {
                if (prevHundreds === 9) {
                  setThousands((prevThousands) => prevThousands + 1);
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
  }, []); // Dependencias vacías aseguran que se ejecuta solo una vez al montar

  return (
    <div className="flex h-24 bg-black text-center w-full justify-center gap-x-2.5">
      <Counter />
      <Counter />
      <Counter value={thousands} />
      <Counter value={hundreds} />
      <Counter value={tens} />
      <Counter value={units} />
    </div>
  );
};

export default UnitsCounter;
