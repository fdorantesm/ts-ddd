import { ValueObject } from "./value-object";

export abstract class NullValue extends ValueObject<null> {
  constructor(value: null) {
    super(value);
    NullValue.validate(value);
  }

  public static validate(value: null): void {
    if (value !== null) {
      throw new Error("Value must be null");
    }
  }
}
