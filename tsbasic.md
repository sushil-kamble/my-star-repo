# TypeScript

## Installation

1. Install Typescript globally

```
npm install -g typescript ts-node nodemon
```

2. Use `tsc index.ts` to compile typescript file `OR` `nodemon index.ts`
4. Change typescript behaviour by `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es6",
    "lib": [
      "es5",
      "es6",
      "dom"
    ],
    "watch": true
  }
}

```

5. Types are assigned to variables when they are born
6. Should happen will happen

## Strings and Numbers

```ts
let n = 5
// n: number
let num: number
let s = 'abc'
// s: string
let str: string

function add(a: number, b: number): number {
    return a + b
}
```

## Objects & interface

`Names: Types`

```ts
// name: string, age: number, friends: string[]
const person = {
    name: 'Smith',
    age: 24,
    friends: ['Rahul', 'John', 'Harry']
}
```

- `Optional Parameter`: `chargeVoltage ?: number` - It means charge voltage can either be a number or it should not be
  their at all
- We only get validation of assignment

```ts
interface Person {
    name: string
    age: number
    friends?: string[] // It is optional
    // If some objs have it it should be array of string
}

const sammy: Person = {
    name: 'sammy',
    age: 40
}
```

```ts
interface phone {
    [k: string]: {
        country: string
        area: number
        number: number
    }
}

const obj: phone = {}
// obj.fax.number - You will get autocomplete after you write obj.fax.
```

```ts
// Array of objects
interface cars {
    name: string
    competitors: {
        make: string
        model: string
        year: number
    }[]
}

const car1: cars = {
    name: 'Nissan',
    competitors: [{
        make: 'abc',
        model: 'xyz',
        year: 2020
    }]
}
```

```ts
// Tuple
let myCar: [number, string, number] = [2000, 'Honda', 1000]
```

- `Union Type (Pipe Symbol) |`

```ts
// Union Type
let outcome: [string, {
    type: string
    lineNumber: number
} | {
    success: string
}] = ["abc", {success: 'Yes'}]
```

- `Type Aliases` - We use title case to define alias name
- One type variable of name (just like const and let), unlike `interfaces`

```ts
type UserContactInfo = {
    name: string
    email: string
}
```

- `a & b` - inheritance everything a has plus b
- `name: string | number` - This will give error in interface but not in alias

## Inheritance

- Classes can `extends` from classes
- Interface can `extends` from interfaces
- `extend` works similarly like Inheritance
- When working with classes and interface use `implements`
- `interface` - will work nicely with classes
- Typescript and Javascript does not support true multiple inheritance
- `interface` are scanned throughout 1st and then their value is noted (2 pases)

```ts
interface AnimalLike {
    eat(food): void // Method
}

class Dog implements AnimalLike {
    // Will give you an error if you do not implements eat method
    eat(food): void {
    }
}
```

## Class

- In Javascript

```js
class Car {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
}

let sedan = new Car("Honda", "Accord", 2017)
```

- In Typescript

```ts
class Car {
    make: string
    model: string
    year: number

    constructor(make: string, model: string, year: number) {
        this.make = make
        this.model = model
        this.year = year
    }
}

let sedan = new Car("Honda", "Accord", 2017)
// Can't do new Car(2017, "Honda", "Accord")
```

- Access modifier keywords
- `#fields` - Private Fields in JavaScript. eg `this.#year = year`
- `readonly` - Readonly in TypeScript. eg `public readonly year: number`

```ts
class Car {
    public make: string
    public model: string
    public year: number
    protected vinNumber = generateVinNumber()
    private doorLockCode = generateDoorLockCode()

    constructor(make: string, model: string, year: number) {
        this.make = make
        this.model = model
        this.year = year
    }

    protected unlockAllDoors() {
        unlockCar(this, this.doorLockCode)
    }
}

class Sedan extends Car {
    constructor(make: string, model: string, year: number) {
        super(make, model, year)
        // this.vinNumber - Being protected it can be accessed here
        // this.doorLockCode - Is not accessable
    }

    public unlock() {
        console.log("Unlocking at " + new Date().toISOString())
        this.unlockAllDoors()
    }
}

let sedan = new Car("Honda", "Accord", 2017)
// Can't do new Car(2017, "Honda", "Accord")
```

- Params

```ts
class Car {
    constructor(
        public make: string,
        public model: string,
        public year: number
    ) {
    }
}
```