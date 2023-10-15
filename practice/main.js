function MeFunction () {
    this.talk = function () {
        console.log(this);
    };
    this.arrowTalk = () => {
        console.log(this);
    }
    return this;
};

const func = MeFunction()
console.log(func); // Window Obj

const newFunc = new MeFunction()
console.log(newFunc); // MeFunction Obj
newFunc.talk() // MeFunction Obj
newFunc.arrowTalk() // MeFunction Obj

newFunc.talk.call(this) // Window Obj
newFunc.arrowTalk.call(this) // MeFunction Obj



// class Person {
//     year = new Date().getFullYear()
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     talk() { // Method
//         console.log(`${this.name} having age ${this.age} is Talking`);
//     }
// }

// const sam = new Person('Sam', 23) // Sam having age 23 is Talking
// const jam = new Person('Jam', 25) // Jam having age 23 is Talking
// sam.talk()
// jam.talk()
// console.log(sam.year); // 2023

// sam.__proto__.talk = function() {
//     console.log('YA! changed');
// }

// sam.talk() // YA! changed
// jam.talk() // YA! changed
