import type { EnumKeys } from "./state-enum-keys.type";

export type StateTransitions<T> = {
  [key in EnumKeys<T>]?: EnumKeys<T>[];
};
