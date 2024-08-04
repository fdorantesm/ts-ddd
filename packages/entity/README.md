<h1 align="center">Entity Utilities</h1>

<div align="center">
<br>

<p><i>DDD Entity classes and utilities</i></p>

</div>

## Installation

```sh
npm i @ts-ddd/entity
```

```sh
yarn add @ts-ddd/entity
```

```sh
pnpm install @ts-ddd/entity
```

```sh
bun add @ts-ddd/entity
```

## Usage

```ts
import { Identifier, Entity } from '@ts-ddd/entity';

interface IBook {
  id: Identifier;
  name: string;
  year: number;
  publisher: string;
}
  
class Book extends Entity<IBook> {
  public static create(payload: IBook) {
    return new Book(payload);
  }
  
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

### Create an entity from primitives (create from any data source)

```ts
const book = Book.createFromPrimitives({
  id: '88d37945-cc6e-43b0-8872-9d378d4bb171',
  name: "Harry Potter",
  year: 1997,
  publisher: "Bloomsbury"
});
```

### Create an entity to put in a data store

```ts
const book = Book.createToPrimitives({
  name: `Harry Potter and the Sorcerer's Stone`,
  year: 1997,
  publisher: "Bloomsbury"
});
```

### Get property from entity

```ts
book.getProperty('id') // 88d37945-cc6e-43b0-8872-9d378d4bb171
```

### Set property to entity

```ts
book.setProperty('name', `Harry Potter and the Sorcerer's Stone`)
```

### Get primitives values

```ts
book.toPrimitives()
/*
  {
    id: '88d37945-cc6e-43b0-8872-9d378d4bb171',
    name: 'Harry Potter and the Sorcerer's Stone',
    year: 1997,
    publisher: 'Bloomsbury'
}
*/
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
