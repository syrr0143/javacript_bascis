// inheritence is the passing down the property from the parent to cild class

/*
syntax for the inheritence is 
class parent {

}

class child extends parent{

}
*/

class person {
    constructor(name) {
        this.species = "homo sapeiens";
        this.name = name;
        console.log("constructor is called from the parent person ")
    }
    eat() {
        console.log("i am also person i can eat also ")
    }
    sleep() {
        console.log("i am oersin so i also need to sleep ")
    }


}
class Engineer extends person {
    constructor(name) {
        super(name);
    }
    code() {
        console.log("i am an enginner i need to code to survive in the market")
    }
    salary() {
        console.log("i get paid for the work i do in the form of the coding ")
    }
}
class Doctor extends person {
    work() {
        super.eat();
        console.log("i am a doctor i have to treat patient ")
    }
    salary() {
        console.log("i get paid for the work i do in the form of the ]treating the patient  ")
    }
    // method overriding 
    eat() {
        console.log("we are doctor we eat better than the neginner they aleways do tye party stuffs ")
    }
}

/* this is how we create any objecet if the class defined in our function */
// let sumit = new Engineer("sumit yadav");
// sumit.code();
// sumit.eat();
// sumit.salary();

let poonam = new Doctor();
poonam.work();
// poonam.eat();

