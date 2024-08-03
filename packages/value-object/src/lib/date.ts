import { ValueObject } from "./value-object";

export abstract class DateValue extends ValueObject<Date> {
  constructor(value: Date) {
    super(value);
    DateValue.validate(value);
  }

  public static validate(value: Date): void {
    if (!(value instanceof Date)) {
      throw new Error("Value must be a date");
    }
  }
}
