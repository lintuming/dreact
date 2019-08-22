const hasSymbol = typeof Symbol === "function" && Symbol.for;


export const DREACT_ELEMENT_TYPE=hasSymbol ? Symbol("$$typeof") : 0xeac7;