// function power(){
// var a= prompt("Enter the value of a: ");
// var b= prompt("Enter the value of b: ");
// var c =Math.pow(a,b);
// document.write(a + " raised to " + b + " is " + c)
// }
// power();

// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// } 
// document.write("For Leapyear = True");
// document.write("</br>");
// document.write("Not a Leapyear = False");
// document.write("</br>");
// document.write("</br>");
// var a = prompt("Enter the year");
// document.write("You entered " + a + " " + leapyear(a));


function triangle(){
var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
alert(area)
}
triangle();