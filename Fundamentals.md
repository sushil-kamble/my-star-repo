# Fundamentals

JavaScript defines 5 types of primitive data types:

- string
- number
- boolean
- null
- undefined

## String

> All string methods return a new string. They don't modify the original string.

```js
const name = "Sushil";
console.log(name);
console.log(name.length); // 6
console.log(name.slice(3)); // hil
console.log(name.slice(3, 5)); // hi
console.log(name.slice(-3)); // hil
console.log(name.substr(0, 3)); // Sus
// Difference between slice and substr is substr doesn't accept negative value
const text = "Please visit Microsoft!";
const newText = text.replace("Microsoft", "Apple");
console.log(newText); // Please visit Apple!
// The replace() method does not change the string it is called on. It returns a new string.
console.log(name.toUpperCase()); // SUSHIL
console.log(name.toLowerCase()); // sushil
let text = "       Hello World!        ";
console.log(text.trim()); // Hello World!
console.log(name[0]); // S
console.log(name.split("")); // [ 'S', 'u', 's', 'h', 'i', 'l' ]
// Split method converts string into array

```

## Array

```js
const arr = [10, 20, 30, 40]
console.log(arr.length) // 4
arr.push(50) // add to end
console.log(arr) // [ 10, 20, 30, 40, 50 ]
arr.pop() // remove at end
console.log(arr) // [ 10, 20, 30, 40, 50 ]
arr.shift() // remove from beg
console.log(arr) // [ 20, 30, 40 ]
arr.unshift(10) // Add at beg
console.log(arr) // [ 10, 20, 30, 40 ]

console.log(arr.indexOf(20)) // 1
console.log(arr.includes(30)) // true
console.log(arr.reverse()) // [ 40, 30, 20, 10 ]
console.log(arr.sort()) // [ 10, 20, 30, 40 ]

// Array to String
console.log(arr.join("")) // 10203040 (String)

// Loop Over - For Each
arr.forEach((x) => {
    console.log(x)
})

// Loop Over - For Each with index
arr.forEach((x, index) => {
    console.log(x + " - " + index)
})

// Loop over - For
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// Loop over - For..of
for (const x of arr) {
    console.log(x)
}

// Loop over - While
let i = 0
while (i < arr.length) {
    console.log(arr[i])
    i++
}

// This is how to make a copy
let shallowCopy = arr.slice()

```

> Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places

```js
function sum(x, y, z) {
    return x + y + z
}

const numbers = [1, 2, 3]
console.log(sum(...numbers)) // 6

let numberStore = [0, 1, 2];
let newNumber = 12;
numberStore = [...numberStore, newNumber];
console.log(numberStore) // [ 0, 1, 2, 12 ]
```

## Map

- The keys of an Object must be either a String or a Symbol.
- A Map's keys can be any value

```js
const map1 = new Map();
map1.set('a', 1)
map1.set('b', 2)
map1.set('c', 3)
console.log(map1.get('a')) // 1
console.log(map1.has('a')) // true
console.log(map1.size) //3
map1.delete('b')
console.log(map1.size) // 2

map1.forEach(function (value, key) {
    console.log(key + ' = ' + value)
})

for (const [key, value] of map1.entries()) {
    console.log(key + ' = ' + value)
}

// Init
const first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
])
```

## Set

```js
const mySet1 = new Set()
mySet1.add(1)
mySet1.add(5)
mySet1.has(1) // true
mySet1.size // 3
mySet1.delete(5)

for (let item of mySet1) console.log(item)

// convert set to array
console.log([...new Set([10, 20, 10])]) // [ 10, 20 ]
```

## Some Examples using TypeScript / JavaScript

```ts
function removeDuplicates(nums: number[]): number[] {
    return [...new Set(nums)]
}


function twoSum(arr: number[], target: number): number[] {
    const m1 = new Map()
    for (let i = 0; arr.length; i++) {
        const x = arr[i]
        if (m1.has(x)) {
            return [m1.get(x), i]
        } else {
            m1.set(target - x, i)
        }
    }
    return [-1, -1]
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(removeDuplicates([10, 20, 20, 30, 10]))
```