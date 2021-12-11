# Array Of Objects

## Declaration

```javascript
const arrOfObj = [
    {name: "Sandeep", salary: 15000},
    {name: "Vijay", salary: 24000},
    {name: "Suraj", salary: 27000},
    {name: "Jay", salary: 17000},
    {name: "Varun", salary: 32000}
];
```

## Loop Over

```javascript
arrOfObj.forEach(obj => {
    console.log(obj.name + ": " + obj.salary);
});
```

```bash
Sandeep: 15000
Vijay: 24000
Suraj: 27000
Jay: 17000
Varun: 32000
```

## Filter - Salaries greater than 20000

```javascript
arrOfObj.filter(obj => obj.salary > 20000);
```

```bash
[
  { name: 'Vijay', salary: 24000 },
  { name: 'Suraj', salary: 27000 },
  { name: 'Varun', salary: 32000 }
]
```

## Map - Get the name / salary array

```javascript
arrOfObj.map(entry => entry.name);
```

```bash
['Sandeep', 'Vijay', 'Suraj', 'Jay', 'Varun']
```

## Reduce - Salary Total

```javascript
let total = arrOfObj.reduce((acc, cur) => {
    return acc + cur.salary;
}, 0);
```

```bash
115000
```

## Find - return Object

```javascript
arrOfObj.find(entry => entry.name === "Varun");
```

```bash
{ name: 'Varun', salary: 32000 }
```

## Includes - Return array of Object having this name

```javascript
const arr = ["Varun", "Suraj", "Vijay"];
arrOfObj.filter(entry => arr.includes(entry.name));
```

```bash
[
  { name: 'Vijay', salary: 24000 },
  { name: 'Suraj', salary: 27000 },
  { name: 'Varun', salary: 32000 }
]
```
