import { ValueObject } from "./value-object";

export abstract class StringValue extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    StringValue.validate(value);
  }

  public isLongerThan(other: StringValue): boolean {
    return this.getValue().length > other.getValue().length;
  }

  public isShorterThan(other: StringValue): boolean {
    return this.getValue().length < other.getValue().length;
  }

  public hasLength(length: number): boolean {
    return this.getValue().length === length;
  }

  public contains(substring: string): boolean {
    return this.getValue().includes(substring);
  }

  public toUpperCase(): string {
    return this.getValue().toUpperCase();
  }

  public toLowerCase(): string {
    return this.getValue().toLowerCase();
  }

  public capitalize(): string {
    return this.getValue().charAt(0).toUpperCase() + this.getValue().slice(1);
  }

  public trim(): string {
    return this.getValue().trim();
  }

  public startsWith(substring: string): boolean {
    return this.getValue().startsWith(substring);
  }

  public endsWith(substring: string): boolean {
    return this.getValue().endsWith(substring);
  }

  public replace(searchValue: string, replaceValue: string): string {
    return this.getValue().replace(searchValue, replaceValue);
  }

  public split(separator: string): string[] {
    return this.getValue().split(separator);
  }

  public substring(start: number, end: number): string {
    return this.getValue().substring(start, end);
  }

  public charAt(index: number): string {
    return this.getValue().charAt(index);
  }

  public static validate(value: string): void {
    if (typeof value !== "string") {
      throw new Error("Value must be a string");
    }
  }
}
