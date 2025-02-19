import { createContext } from "react";

type ContextTypes = {
  value: number;
  setUpValue: () => void;
  setDownValue: () => void;
};

export const ValueContext = createContext({} as ContextTypes);
