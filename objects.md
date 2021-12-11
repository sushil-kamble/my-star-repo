# Objects

> Keys in object are always string

## Declaration

```js
const car = {
    name: 'Maruti Swift',
    mileage: 23.2,
    price: 850000,
    features: ['Power Steering', 'Air Conditioner', 'Alloy Wheels'],
    airbag: true
}
```

## Access Item

```js
car["name"]
// Or
car.name
```

```shell
Maruti Swift
```

## Add and Delete Property

```js
// Add fuel property
car["fuel"] = "Some Fuel";
// Delete fuel property
delete car["fuel"];
// new object with all the keys of the original except some
const {airbag, features, ...newCar} = car;
// Keys airbag and features will be removed
```

## Loop Over Object - For in & For of

```js
for (const key in car) {
    // First is key, Second Value
    console.log(key, car[key]);
}
```

```js
for (const [key, value] of Object.entries(car)) {
    console.log(key, value);
}
```

```shell
name Maruti Swift
mileage 23.2
price 850000
features [ 'Power Steering', 'Air Conditioner', 'Alloy Wheels' ]
airbag true
```

## Get all the keys - return array of keys

```js
Object.keys(car)
```

```shell
[ 'name', 'mileage', 'price', 'features', 'airbag' ]
```

## Check weather key exists

```js
if ("price" in car) {
    console.log("Yes key exits");
} else {
    console.log("No it doesn't");
}
```

```js
if (car.hasOwnProperty("name")) {
    console.log("Yes key exits");
} else {
    console.log("No it doesn't");
}
```

```shell
Yes key exits
```