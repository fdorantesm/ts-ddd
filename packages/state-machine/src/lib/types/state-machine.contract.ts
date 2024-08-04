import type { EnumKeys } from "./state-enum-keys.type";
import type { StateTransitions } from "./state-transitions.type";

export type StateMachineContract<T> = {
  transitions: StateTransitions<T>;
  currentState: EnumKeys<T>;
};
