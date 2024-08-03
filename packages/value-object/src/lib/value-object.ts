export class ValueObject<T> {
  constructor(private readonly value: T) {
    this.value = value;
    this.ensureValueIsDefined(value);
  }

  private ensureValueIsDefined(value: T): void {
    if (value === null || value === undefined) {
      throw new Error("Value must be defined");
    }
  }

  public equalsTo(valueObject: ValueObject<T>): boolean {
    return this.value === valueObject.value;
  }

  public getValue(): T {
    return this.value;
  }

  public toString(): string {
    return String(this.value);
  }

  public isDefined(): boolean {
    return this.value !== null && this.value !== undefined;
  }

  public isNull(): boolean {
    return this.value === null;
  }
}
