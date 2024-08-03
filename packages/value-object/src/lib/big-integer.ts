import { ValueObject } from "./value-object";

export abstract class BigIntegerValue extends ValueObject<bigint> {
  constructor(value: bigint) {
    super(value);
    BigIntegerValue.validate(value);
  }

  public static validate(value: bigint): void {
    if (typeof value !== "bigint") {
      throw new Error("Value must be a bigint");
    }
  }
}
