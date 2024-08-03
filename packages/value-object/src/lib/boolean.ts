import { ValueObject } from "./value-object";

export abstract class BooleanValue extends ValueObject<boolean> {
  constructor(value: boolean) {
    super(value);
    BooleanValue.validate(value);
  }

  public isTrue(): boolean {
    return this.getValue();
  }

  public isFalse(): boolean {
    return !this.getValue();
  }

  public static validate(value: boolean): void {
    if (typeof value !== "boolean") {
      throw new Error("Value must be a boolean");
    }
  }
}
