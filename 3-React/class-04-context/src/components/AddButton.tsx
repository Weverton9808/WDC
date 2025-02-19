import { useContext } from "react";
import { ValueContext } from "../contexts/a";

export function AddButton() {
  const { setUpValue, setDownValue } = useContext(ValueContext);

  return (
    <>
      <button onClick={setUpValue}>ADD+</button>
      <button onClick={setDownValue}>REM-</button>
    </>
  );
}
