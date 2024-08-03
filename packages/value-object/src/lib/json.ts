import { ValueObject } from "./value-object";

export abstract class JsonValue extends ValueObject<{ [key: string]: any }> {
  constructor(value: JsonValue) {
    super(value);
    JsonValue.validate(value);
  }

  public static validate(value: JsonValue): void {
    try {
      const json = JSON.stringify(value);
      JSON.parse(json);
    } catch (error) {
      throw new Error("Value must be a valid JSON");
    }
  }

  public hasKey(key: string): boolean {
    return key in this.getValue();
  }

  public hasKeys(keys: string[]): boolean {
    return keys.every((key) => this.hasKey(key));
  }

  public getKeys(): string[] {
    return Object.keys(this.getValue());
  }
}
