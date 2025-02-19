import { useContext } from "react";
import { ValueContext } from "../contexts/a";


export function CountCard() {
  const { value } = useContext(ValueContext);

  return (
    <>
      <p>Count: {value}</p>
    </>
  );
}
