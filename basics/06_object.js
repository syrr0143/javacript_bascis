const tinderuser = {};
tinderuser.tinder_id = 123;
tinderuser.name = "sammy ";
tinderuser.isLoggedIn = true;
console.log(tinderuser)

// there is another way to define the object in the js 

const newuser = {
    name: "sumit yadav ",
    age: 25,
    rollno: "2101202cs"
}

const obj1 = { 1: 'a', 2: 'b' }
const obj2 = { 3: 'c', 4: 'd' }

const obj3 = { obj1, obj2 }
console.log(obj3)
let obj4 = [{ ...obj1, obj2 }];
console.log(obj4)
obj4 = Object.assign({}, obj1, obj2)
console.log(obj4)
obj4 = { ...obj1, ...obj2 };
console.log(obj4)

// lets look at the object destructuring 
const nameinteloop = {
    mame: "sumit yadav",
    age: 25,
    rollNumber: "2101202cs"
}

const { age, rollNumber, mame } = nameinteloop;
console.log(age, rollNumber, mame)