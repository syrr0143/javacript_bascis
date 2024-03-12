/* suppose we have 100 lines of the code , and by any chance we get an error in the 6h line of the cde thwween al the cocde after the line 6 will not get processed , this is due to the line by line compilation of the javsript code in any browser 
to handle this type of sitiation we have try catch block that can be helpful to counter tjis type of thecndition 


try {
    normail lines of code that cabt hae any error
} catch (error) {
    those lines that are supposed to throw an error 
}
*/

let a, b, c;
a = 10, b = 100, c = 25;
console.log(a + b + c)
console.log(a * b + c)
console.log(a - b + c)
console.log(a / b + c)
try {

    console.log(abc)


} catch (error) {
    console.log(error)
}