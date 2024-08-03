<h1 align="center">Value Object Utilities</h1>

<div align="center">
<br>

<p><i>Value Objects of primitive types</i></p>

</div>

## Installation

```sh
npm i @ts-ddd/value-object
```

```sh
yarn add @ts-ddd/value-object
```

```sh
pnpm install @ts-ddd/value-object
```

```sh
bun add @ts-ddd/value-object
```

## Usage

```ts
import { validate, v4 as uuid } from 'uuid';

export class Uuid extends StringValue {
  constructor(value: string) {
    super(value);
    this.ensureIsValidUuid(value);
  }

  static generate(): Uuid {
    return new Uuid(uuid());
  }

  private ensureIsValidUuid(value: string): void {
    if (!validate(value)) {
      throw new Error(`${value} is not a valid UUID`)
    }
  }
}
```

## Value Objects

See all available classes:

| Value object types  | Parent Class                         |
| ------------------- | ------------------------------------ |
| BigIntegerValue     | ValueObject<bigint>                  |
| BooleanValue        | ValueObject<boolean>                 |
| DateValue           | ValueObject<date>                    |
| ID                  | ValueObject<string>                  |
| IntegerValue        | ValueObject<number>                  |
| JsonValue           | ValueObject<{ [key: string]: any }>  |
| NullValue           | ValueObject<null>                    |
| NumberValue         | ValueObject<number>                  |
| PositiveNumberValue | NumberValue                          |
| ValueObject         | None                                 |

### ValueObject

| Method              |
| ------------------- |
| equalsTo            |
| getValue            |
| toString            |
| isDefined           |
| isNull              |

### NumberValue

| Methods               |
| --------------------- |
| isGreaterThan         |
| isGreaterThanOrEquals |
| isLessThan            |
| isLessThanOrEquals    |
| isZero                |
| isPositive            |
| isNegative            |
| isBetween             |

### JsonValue

| Methods |
| ------- |
| hasKey  |
| hasKeys |
| getKeys |

### IdValue

| Methods          |
| ---------------  |
| static generate  |

### BooleanValue

| Methods          |
| ---------------  |
| isTrue           |
| isFalse          |

<br>
<br>
---
<br>
<br>

<div align="center">
    <a href="https://github.com/fdorantesm" target="_blank">
        <img src="https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white" alt="github" style="margin-bottom: 5px;" />
    </a>
    <a href="https://twitter.com/fdorantesm" target="_blank">
        <img src="https://img.shields.io/badge/twitter-%2300acee.svg?&style=for-the-badge&logo=twitter&logoColor=white" alt="twitter" style="margin-bottom: 5px;" />
    </a>
    <a href="https://linkedin.com/in/fdorantesm" target="_blank">
        <img src="https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin" style="margin-bottom: 5px;" />
    </a>
    <a href="https://www.youtube.com/user/FernandoDorantes" target="_blank">
        <img src="https://img.shields.io/badge/youtube-%23EE4831.svg?&style=for-the-badge&logo=youtube&logoColor=white" alt="youtube" style="margin-bottom: 5px;" />
    </a>
</div>
