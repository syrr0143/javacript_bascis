 /* there are three types of variable defining technique -- global scope
 var - can be redeclared and redefined
 const -cannot be redeclared or redefined , must be intialised  -- block scope
 let-can only be redefined but cannot be redeclared -- block scope
 */

 var names = "rahul"
 console.log(names)
 var names = "sumit"
 console.log(names)
 var names = "you are a good boy"
 console.log(names)
 // objects
 let students = {
     fullname: "sumit yadav ",
     age: 25,
     rollno: 21012002,
     address: "mallupur"
 }
 // to access the object property
 console.log(typeof (students))
 console.log(students)
 console.log(students.fullname)
console.log(students.age)
console.log(students.rollno)
console.log(students.address)
 // we can also the square bracket
 console.log(typeof (students))
 console.log(students)
 console.log(students["fullname"])
 console.log(students["age"])
 console.log(students["rollno"])
 console.log(students["address"])
 // ---------OPERATORS AND CONDITIONAL STATEMENT

 // loops in js
 for (let i = 0; i < 5; i++) {
     console.log("hello")
 }
 let i = 0;
 while (i < 5) {
     console.log("hi")
     i++;
 }
 // there are another 2 types of the loops
 //for of loops
 let str = "hello sumit yadav"
 for (let i of str) {
     console.log(i)
 }

 // for in loops
 students = {
     name: "sumit yadav",
     age: 28,
     rollno: "250",
     cgpa: 7.2

 }
 for (let key in students) {
     console.log(key, ":", students[key])
 }

 // print number between 0 and 100 even
 let count = 0;
 for (let i = 0; i <= 100; i++) {
     if (i % 2 == 0) {
         console.log(i)
         count++;
     }
 }
 console.log(count)

 // taking the user input
 // prompt("enter a number: ")

 // string in js

 let str2 = " helsdasdasdsdlo"
 console.log(str2.length)
 let str3 = str2.toUpperCase() // convert to the upper case
 str3 = str2.trim() // removes whitespace
 console.log(str3)
 console.log(str3.charAt(5))

 //  let username = prompt("enter your usernaem: ")
 //  username= username + 13
 //  console.log(username)


 // array in js

 let namess = ["sumit", 'hello', 'names']
 console.log(namess)
 console.log(namess.toString())

 // functions in js
 function demo(a, b) {
     return a + b
 }
 results = demo(100, 10)
 console.log(results)

 // arrow function
 const arrowsum = (a, b) => {
     console.log(a + b)
 }
 arrowsum(25, 12)

 // callback function
 let airports = ["pune", "howrah", "mumbai", "delhi"]
 airports.forEach((val) => {
     console.log(val)
 });
 /* we can also use map function as we use the for each t access all the element

 map creates a new array with the results of some operations

 synatax is
 ----- arr.map(callbckfnx(value,index,array))
 */
 airports.map((val) => {
     console.log(val)
 })

 let evennumber = [2, 4, 6, 8, 10, 12, 14, 16]
 evennumber.map((val) => {
     console.log(val);
 })
 console.log(evennumber)

 /*
 FILTER -
         creates a new array of elements that gives true for a condition/filter
         e.g- all even elements
 */

 let realnumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 let filtered = realnumber.filter((val) => {
     return val % 2 === 0;
 })
 console.log(filtered)
 filtered = realnumber.filter((val) => {
     return val % 2 != 0;
 })
 console.log(filtered)
 filtered = realnumber.filter((val) => {
     return val > 0;
 })
 console.log(filtered)

 /*
 DOM---
         manipulation of dom objects
         -1) selecting by id ==> document.getElementById("id")
         -2)selecting by the class ==> document.getElementByClassName("class")
         -3)selecting with tag ==> document.getElementsByTagName("p")

 NOTE- using getelementbyclassname will gives you an array and for that reason you have to select the elemnt index for which you havre to use

         we can also do the same thing by using the query selectors
         documents.querySelector(".hello")-- this will selcts the first elements that is close to hello
         documents.querySelectorAll("hello")-- this will selcts the all elements that is close to hello


         PRPERTIES--
         .tagname :retuens the tag of the element node
         .innerText :returns the content (text )of the element and all its children
         .innerHTML :returns the plain text or html contents in the elements
         .textContent : returns textual content even for hidden elements

  */

 const helloji = () => {
     let btn = document.getElementsByClassName("buttons")[0];
     if (btn.innerHTML === "hello ji kaise ho") {
         btn.innerHTML = "hello"
         btn.id = "hello"
     } else {
         btn.innerHTML = "hello ji kaise ho"
         btn.id = ""
     }
 };

 /**
  get attribute and set attribute --

  */
 let button = document.getElementById("outerdiv");
 let id = button.getAttribute("id")
 console.log(id)
 button.setAttribute("outerdiv", "hello")
 id = button.getAttribute("outerdiv")
 console.log(id)

 // we can also change the style of any tags using the style property

 let div = document.getElementById("whole");
 div.style.backgroundColor = "white"

 // adding or removng the ellements from the page

 let newbtn = document.createElement("button");
 newbtn.innerHTML = "dont click me , im horny";

 div = document.getElementById("whole");
 // div.after(newbtn) // sets element after the end of the element
 // div.before(newbtn)  sets the elemenet before the starting if the element

 // div.append(newbtn)   append the element at the end of iniside itself
 div.prepend(newbtn) // append at the starting of the element inthe div

 // to remove any element from the body we can do this by using the synatx defined below
 // div.remove(newbtn)


 /* EVENTS IN JAVASCRIPT -
                             can be defined as the echange in the state of an object is known as the events
     there are many evebts available in the javascript
     -mouse events
     -keyboard evenst
     - from events
     -print events and many more
 */


 const mousev = document.querySelector(".nextdiv");
 mousev.addEventListener("click",(e)=>{
     console.log("fuck you")

 })

// let modebtn = document.querySelector(".changemode");
// let currmode = "dark";

// modebtn.addEventListener("click", () => {
//     if (currmode === "dark") {
//         currmode = "light";
//         document.querySelector("body").classList.remove("light");
//         document.querySelector("body").classList.add("dark");

//     }
//     else {
//         currmode = "dark";
//         document.querySelector("body").classList.remove("dark");
//         document.querySelector("body").classList.add("light");
//     }
// })


/* objects and classes in javascrpt

const students = {
    fullname: "sumit yadav",
    marks: 100,
    printmarks: function (marks) {
        console.log(marks);
    },

}

console.log(students)
console.log(students.fullname)
students.printmarks(100)
*/
// what is prototype oin javascrypt
/*
In JavaScript, a prototype is a mechanism through which objects inherit properties and methods from other objects. Each JavaScript object has a prototype, which is also an object. When you access a property or method of an object, JavaScript first looks at the object itself. If it doesn't find the property or method there, it looks at the object's prototype. If the property or method is still not found, JavaScript continues up the prototype chain until it reaches the end, which is the base `Object` prototype.

You can think of prototypes as a blueprint for objects. When you create a new object using a constructor function or a class, the object inherits properties and methods from the prototype of that constructor function or class. This inheritance allows you to create objects that share common functionality without duplicating code.

Here's a simple example to illustrate prototypes:
*/
// Constructor function
/*
function Person(name) {
    this.name = name;
}

// Adding a method to the prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

// Creating a new object using the constructor function
const person1 = Object.create(Person.prototype);
person1.name = "Alice";
person1.greet = function() {
    console.log("I will not greet");
};

let person2 = new Person("Bob");

// Both objects can access the greet method, but they will behave differently
person1.greet(); // Output: I will not greet
person2.greet(); // Output: Hello, my name is Bob


In this example, the `greet` method is added to the `Person` prototype, so both `person1` and `person2` can access it, even though it is not defined directly on the objects themselves.
*/

/* using the class for definig the property and therir method */
/*
class Students {
    start(){
      return  ("students will start their career here")
    }
    stop(){
       return ("student left the college since he passed his degrreee exam")
    }
    setcategory(category){
        return (`this students is belongs to ${category}`)
    }
};

let sumityadav = new Students; // here sumityadaa is an objext of class Students and we can acess the prperty of it usng the dot method
// start and stop is te constructor

console.log(sumityadav.start())
console.log(sumityadav.stop())
console.log(sumityadav.setcategory("obc"))*/

/*
constructor - intialisethe new object in javascript
can use new


class students {
    name(names) {
        return (names)
    };
}
var sumitaya = new students;
console.log(sumitaya.name("sumit yadav"))


// INHERITENCE IN JAVASCRIPT

class parents {
    hello() {
        console.log("hello from parents")
    }
}

class child extends parents {


}
let object1 = new child();
object1.hello()


class vehicle {
    fourwheel() {
        console.log("i have fourwheel")
    }
    mileage(km) {
        console.log(`i have ${km} mileage`)
    }
    cost1() {
        console.log("cost nothing")
    }
}

class fortuer extends vehicle {
    cost(rs) {
        console.log(`it will cost ${rs}`)
    }
    cost1() {
        console.log(`it will cost SOMETHING`)
    }
}

var fortunerobj = new fortuer;
fortunerobj.cost1();
fortunerobj.cost(120000);
fortunerobj.fourwheel();
fortunerobj.mileage(120);



// ERROR HANDLING

try {
    // normal code
    console.log("a/c", 10 / 0);
} catch (error) {
    // eror handling
    console.log(error)
}
*/

// callback in javascript
/*
Synchronous -
        it basically means that program have to run in a particulalr sequences of instrucntion given in the program . each insruction waits for the previous to complete its execution
Asynchronous -
        it basically means that program have to run in a particulalr sequences of instrucntion given in the program . each insruction waits for the previous to complete its execution
// */
// const count = async () => {
//     for (let i = 0; i < 10; i++) {
//         console.log(i);

//     }
// }

// setTimeout(count, 2000);
// console.log("hello");
// console.log("bitch");
// console.log("how are you");

function hello() {
    console.log("hello from the hello function ")
}

setTimeout(() => {
    hello()
}, 2000);

// whenever there is promise we can have 2 type of responses that is resolve or rejvcted

// function getdata(dataid, getnextdata) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log("data", dataid);
//             // resolve("sucess")
//             reject("error no data found")
//             if (getnextdata) {
//                 getnextdata();
//             }
//         }, 5000);
//     });
// }

 const getPromise = () => {
    return new Promise((resolve, reject) => {
        // console.log("i am a promise")
        // resolve("success")
     });
 };
// promise fulfilled succesfuly
 let promise = getPromise();
 promise.then(() => {
    console.log("promise fulfilled")
});

// promise returns the errir then we have to write below code
// promise.catch(() => {
//     console.log("the promise remains unfulffilled due to an error ")
// })


/*
Async await-
        always returns a promise
await - makes the code wait at that point until the promise is settled, at which point the fulfilled value of the promise is treated as a return value, or the rejected value is thrown.
*/

async function hello() {
    console.log("hello this is async function ")
}



