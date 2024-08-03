import { ValueObject } from "./value-object";

export abstract class IntegerValue extends ValueObject<number> {
  constructor(value: number) {
    super(value);
    IntegerValue.validate(value);
  }

  public static validate(value: number): void {
    if (!Number.isInteger(value)) {
      throw new Error("Value must be an integer");
    }
  }
}
