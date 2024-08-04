import { InvalidStateTransitionException } from "./exceptions/invalid-state-transition.exception";
import type { EnumKeys } from "./types/state-enum-keys.type";
import type { StateMachineContract } from "./types/state-machine.contract";
import type { StateTransitions } from "./types/state-transitions.type";

export class StateMachine<T> {
  private transitions: StateTransitions<T>;
  private currentState: EnumKeys<T>;

  protected constructor(options: StateMachineContract<T>) {
    this.transitions = options.transitions;
    this.currentState = options.currentState;
  }

  public static instance<T>(options: StateMachineContract<T>): StateMachine<T> {
    return new StateMachine(options);
  }

  public getState(): EnumKeys<T> {
    return this.currentState;
  }

  public is(state: EnumKeys<T>): boolean {
    return this.currentState === state;
  }

  public setState(state: EnumKeys<T>): void {
    if (!this.canTransitionTo(state)) {
      throw new InvalidStateTransitionException(
        `Invalid state transition from ${this.currentState.toString()} to ${state.toString()}`
      );
    }

    this.currentState = state;
  }

  public canTransitionTo(to: EnumKeys<T>): boolean {
    const validTransitions = this.transitions[this.currentState];
    return validTransitions ? validTransitions.includes(to) : false;
  }

  public static validateTransition<T>(
    transitions: StateTransitions<T>,
    fromState: EnumKeys<T>,
    toState: EnumKeys<T>
  ): boolean {
    const validTransitions = transitions[fromState];
    return validTransitions ? validTransitions.includes(toState) : false;
  }
}
