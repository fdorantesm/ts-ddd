import { ValueObject } from "./value-object";

export abstract class NumberValue extends ValueObject<number> {
  constructor(value: number) {
    super(value);
    NumberValue.validate(value);
  }

  public isGreaterThan(other: NumberValue): boolean {
    return this.getValue() > other.getValue();
  }

  public isGreaterThanOrEquals(other: NumberValue): boolean {
    return this.getValue() >= other.getValue();
  }

  public isLessThan(other: NumberValue): boolean {
    return this.getValue() < other.getValue();
  }

  public isLessThanOrEquals(other: NumberValue): boolean {
    return this.getValue() <= other.getValue();
  }

  public isZero(): boolean {
    return this.getValue() === 0;
  }

  public isPositive(): boolean {
    return this.getValue() > 0;
  }

  public isNegative(): boolean {
    return this.getValue() < 0;
  }

  public isBetween(min: NumberValue, max: NumberValue): boolean {
    return this.isGreaterThanOrEquals(min) && this.isLessThanOrEquals(max);
  }

  public static validate(value: number): void {
    if (typeof value !== "number") {
      throw new Error("Value must be a number");
    }
  }
}
