import { ValueObject } from "./value-object";

export abstract class IdValue extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }

  public static generate(): string {
    return Math.random().toString(16).substring(2);
  }
}
