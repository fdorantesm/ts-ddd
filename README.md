<h1 align="center">Typescript Domain-Driven Design</h1>
<div align="center">
<br>
<p><i>A set of utilities for Domain-Driven Design</i></p>
</div>

## Packages

| Packages              | Link                                                              |
| --------------------- | ----------------------------------------------------------------- |
| @ts-ddd/common        | [Go to package](https://npmjs.com/package/@ts-ddd/common)         |
| @ts-ddd/entity        | [Go to package](https://npmjs.com/package/@ts-ddd/entity)         |
| @ts-ddd/state-machine | [Go to package](https://npmjs.com/package/@ts-ddd/state-machine)  |
| @ts-ddd/value-object  | [Go to package](https://npmjs.com/package/@ts-ddd/value-object)   |

### Common

#### UUID generator

```ts
import { uuidGenerator } from '@ts-ddd/common';

const uuid = uuidGenerator() // -> b9ebc3ea-bfbd-4a86-8b7b-39995b47c631
```

#### Interfaces

| Interface       | Properties                                 |
| -------------- | ------------------------------------------ |
| WithActive     | isActive                                   |
| WithAudit      | createdBy, updatedBy and deletedBy as date |
| WithDomain     | domain                                     |
| WithLocale     | locale                                     |
| WithNullable   | isNullable                                 |
| WithOwner      | ownerId                                    |
| WithScope      | scope                                      |
| WithStatus     | status                                     |
| WithTimestamps | createdAt and deletedAt                    |
| WithUser       | userId                                     |
| WithUuid       | uuid                                       |
| WithVersion    | version                                    |

#### Example

```ts
interface Post extends WithActive, WithUuid {
    title: string;
    body: string;
}

/*
  {
    uuid: string;
    title: string;
    body: string;
    isActive: boolean;
  }
*/
```

### Entity

Use to create domain entities using an interface as contract.

```ts
export interface IBook {
  id: Identifier;
  name: string;
  year: number;
  publisher: string;
}

```

```ts
import { uuidGenerator } from '@ts-ddd/common';
import { Identifier, Entity } from '@ts-ddd/entity';
import { IBook } from '../interfaces/book.interface';

export class Book extends Entity<IBook> {
  public static createToPrimitives(payload: Omit<IBook, 'id'>) {
    return new Book({
      id: uuidGenerator(),
      ...payload
    })
  }
  
  public static createFromPrimitives(payload: IBook): Book {
    return new Book(payload)
  }
}
```

#### Getting an object from the data source

```ts
class BooksService {
  constructor(private readonly booksRepository: BooksRepository) {}

  public async findBookById(id: string): Promise<Book | undefined> {
    const book = await this.booksRepository.findOne({ id });

    if (book) {
        return Book.createFromPrimitives(book)
    }

    return undefined;
  } 
}
```

#### Creating a book to store it in the data source

```ts
class CreateBookUseCase {
  constructor(private readonly booksService: BooksService) {}

  public async execute(payload: Omit<IBook, 'id'>): Promise<Book | undefined> {
    const book = await this.booksRepository.create(
        Book.createToPrimitives(payload)
    );

    return book;
  } 
}
```

### State Machine

```ts
import { StateMachine } from '@ts-ddd/state-machine';

enum LightTransitions {
  RED = "red",
  GREEN = "green",
  PULSING_GREEN = "pulsing_green",
  AMBER = "amber",
}

const transitions = {
  [LightTransitions.RED]: [LightTransitions.GREEN],
  [LightTransitions.GREEN]: [LightTransitions.PULSING_GREEN],
  [LightTransitions.PULSING_GREEN]: [LightTransitions.AMBER],
  [LightTransitions.AMBER]: [LightTransitions.RED],
}

const light = StateMachine.instance({
  transitions,
  currentState: LightTransitions.RED,
});

try {
  light.setState(LightTransitions.GREEN);
} catch (error) {
  // InvalidStateTransitionException
}
```

### Value Object

```ts
import { StringValue } from '@ts-ddd/value-object'
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

```ts
import { StringValue } from '@ts-ddd/value-object'

export class Title extends StringValue {}
```

```ts
import { PositiveNumberValue } from '@ts-ddd/value-object'

export class Year extends PositiveNumberValue {}
```

```ts
class BooksRepository {
  public async getBook(id: string): Promise<Book | undefined> {
    const book = await this.booksRepository.findOne({ id });

    if (!book) {
      return undefined;
    }

    return Book.createFromPrimitives({
      id: new Uuid(book.id),
      title: new Title(book.title),
      year: new Year(book.year)
    })
  }
}
```

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