import { PropsWithChildren, useState } from "react";
import { ValueContext } from "./a";

export function ValueProvider({ children }: PropsWithChildren) {
  const [value, setValue] = useState(0);

  function setUpValue() {
    setValue((prev) => prev + 1);
  }

  function setDownValue() {
    setValue((prev) => prev - 1);
  }

  return (
    <ValueContext.Provider value={{ value, setUpValue, setDownValue }}>
      {children}
    </ValueContext.Provider>
  );
}
