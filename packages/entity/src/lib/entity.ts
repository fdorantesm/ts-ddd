import type { ConstructorPayload } from "./types/constructor-payload.type";
import type { Identifier } from "./types/identifier.type";

export abstract class Entity<T extends ConstructorPayload> {
  protected constructor(private data: T) {}

  public getId(): Identifier {
    return this.data.id;
  }

  public toPrimitives(): T {
    return this.data;
  }

  public getProperty<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  public setProperty<K extends keyof T>(key: K, value: T[K]): void {
    this.data[key] = value;
  }

  public update(payload: Partial<T>): void {
    this.data = { ...this.data, ...payload };
  }
}
