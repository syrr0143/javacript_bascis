// PROTOTYPING IN THE JAVASCRIPT 

const students = {
    name: this.name,
    roll_number: this.roll_number,
    village: this.village,
    age: this.age,
    marks: (x) => {
        return x;
    }
}

const student1 = {
    name: "sumit yadav",
    roll_number: "2101202cs",
    village: "mallupur",
    age: 25,

}
student1.__proto__ = students; // after defining the proto we can use the properties of the students without even definig them in the function of the student1
// the above activity is called as the prototyping, available for each of the js object that is defined in the document 
// prototyping is basically the refrence to an object  


// CLASSES  IN THE JAVASCRIPT 
/*
 classes are the program code template for the crwating the object , those object wl have the some sate (vaiaables ) & omsome other behaviour 

 classes are the blueprint for any object 
*/

class car {

    start() {
        return ("start the car")
    }
    stop() {
        return ("stop the car")
    }
    neutral() {
        return ("neutral the car")
    }
    constructor() {
        console.log("this is from the constructor")
    }
};

let toyota = new car();
console.log(toyota.start())
console.log(toyota.stop())
console.log(toyota.neutral())