import { NumberValue } from "./number";

export abstract class PositiveNumberValue extends NumberValue {
  constructor(value: number) {
    super(value);
    PositiveNumberValue.validate(value);
  }

  public static validate(value: number): void {
    if (value <= 0) {
      throw new Error("Value must be positive");
    }
  }
}
