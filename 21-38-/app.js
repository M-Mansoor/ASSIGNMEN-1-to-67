//CHAPTER 21-38 (all Chapters in one file)
//=================================================================

// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// var fullName = firstName + " " + lastName;
// document.write("My name is " + " " +fullName);
// document.write("</br>");
// document.write("</br>");


// var mobile = prompt("Enter your favourite mobile phone");
// var len = mobile.length;
// document.write("My favourite phone is: " + " " + mobile);
// document.write("</br>");
// document.write("Length of string: " + " " + len);
// document.write("</br>");


//  var str = "Pakistani";
// var pos = str.indexOf("n");
// document.write("string: " + " " + str);
// document.write("</br>");
// document.write("Index of 'n': " + " " + pos);


//  var str = "Hello world";
// var pos = str.lastIndexOf("l");
// document.write("string: " + " " + str);
// document.write("</br>");
// document.write("Index of 'l': " + " " + pos);

// var str =  "Pakistani";
// var find = str.slice(3,4);
// document.write("String: " + " " + str);
// document.write("</br>");
// document.write("Character at Index 3: " + " " + find);


// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// var fullName = firstName.concat(" ", lastName);
// document.write("My name is " + " " +fullName);
// document.write("</br>");
// document.write("</br>");


// var city = "Hyderabad";
// document.write("City: " + " " + city);
// document.write("</br>");
// city1= city.replace("Hyder" , "Islam");
// document.write("After Replacement: " + " " + city1);


// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("Message: " + " " + message);
// document.write("</br>");
// document.write("</br>");
// message1= message.replace("and" , "&");
// document.write("After Replacement: " + " " + message1);

// var  value = "472";
// document.write("Value: " + " " + value);
// document.write("</br>");
// var type = typeof("472");
// document.write("Type" + " " + type);
// document.write("</br>");
// document.write("Value: " + " " + value);
// document.write("</br>");
// var type1 = parseInt("472");
// var type2 = typeof(type1);
// document.write("Type" + " " + type2);

// var input= prompt("Enter input");
// document.write("User Input: " + " " + input);
// document.write("</br>");
// var convert = input.toUpperCase();
// document.write("Upper case: " + " " + convert);


//  var str = "javascript"
// document.write(
// str.split(' ')
//    .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
//    .join(' ')
// );



// var num = 35.36;
// document.write("Number: " + " " + num);
// document.write("</br>");
// var s = num + '';
// s =s.replace('.', '');
// s = parseInt(s);
// document.write("Result: " + " " + s);


//  var name = prompt("Enter username");

// if (name.charCodeAt(33) ){
//       alert("please enter a valid username");
//       if (name.charCodeAt(46)){
//           alert("please enter a valid username");

//       }
// }
// else{
//       alert("Username: " + " " + name);
// }


// var A = ["Cake" , "Apple pie" , "Cookie" , "Chips" , "Patties"];
// var input = prompt("Welcome to United Bakery, what do you to order?");
// if(input=== A[0] || input=== A[1] || input === A[2] || input === A[3] || input === [4]){
//     document.write("Your order is " + " " + input);
//     document.write("</br>");
//     document.write("Thankyou!!");
//     }
//     else{
//         alert("Invalid order....");
//     }


// var uni = " University of Karachi";
// var ar = uni.split('');
// document.write( ar );

// const myString = prompt("Enter the input");
// document.write("User input: " + " " + myString);
// document.write("</br>");
// const stringLength = myString.length;
// document.write('Last Character of Input: ', myString.charAt(stringLength - 1));


// var temp = "The quick brown fox jumps over the lazy dog.";
// var count = (temp.match(/the/g) || []).length;
// document.write(count);



// var num = prompt("Enter Positive Integer");
// document.write("Number: " + " " + num);
// document.write("</br>");
// var r = Math.round(num);
// document.write("Round off value: " + " " + r);
// document.write("</br>");
// var f = Math.floor(num);
// document.write("Floor value: " + " " + f);
// document.write("</br>");
// var c = Math.ceil(num);
// document.write("Ceil value: " + " " + c);
// document.write("</br>");


// var num = prompt("Enter Positive Integer");
// document.write("Number: " + " " + num);
// document.write("</br>");
// var r = Math.round(num);
// document.write("Round off value: " + " " + r);
// document.write("</br>");
// var f = Math.floor(num);
// document.write("Floor value: " + " " + f);
// document.write("</br>");
// var c = Math.ceil(num);
// document.write("Ceil value: " + " " + c);
// document.write("</br>");


// var num = -4;
// var abs = Math.abs(num);
// document.write("Absolute value of -4 is " + " " + abs);


// var dice = Math.floor(Math.random() * 6) + 1;
// document.write("Random dice value " + dice);

// var head = 0;
// var tail = 0;
// x = (Math.floor(Math.random() *2) == 0);
// if(x){
//     document.write("heads");
// }
//     else{
//         document.write("tails");
//     }


// var ran = Math.floor(Math.random() * 100);
// document.write("Random number between 1 and 100: " + " " + ran);

// var weigth = prompt("Enter your weight in kilograms");
// document.write("The weight of user is " + " " + weigth);


// var x = Math.floor(Math.random() * 10 + 1); 
// var y = prompt("Guess the number between 1 to 10");
// if(x == y) 
//    {     
//        alert("CONGRATULATIONS!!! YOU GUESSED RIGHT" ); }

//    else
//    { 
//        alert("try again"); }


// var d = new Date();
// document.write(d);


// var my_month=new Date()
// var month_name=new Array(12);
// month_name[0]="January"
// month_name[1]="February"
// month_name[2]="March"
// month_name[3]="April"
// month_name[4]="May"
// month_name[5]="June"
// month_name[6]="July"
// month_name[7]="August"
// month_name[8]="September"
// month_name[9]="October"
// month_name[10]="November"
// month_name[11]="December"
// alert ("Current month = " + month_name[my_month.getMonth()]); 



// Date.prototype.monthNames = [
//  "Monday" , "Tuesday" , "Wednesday" , "Thursday" ,
//     "Friday" , "Saturday" , "Sunday"];
// Date.prototype.getMonthName = function() {
//     return this.monthNames[this.getMonth()];
// };
// Date.prototype.getShortMonthName = function () {
//     return this.getMonthName().substr(0, 3);
// };
// var d = new Date();
// alert(d.getMonthName());      
// alert(d.getShortMonthName())


// var days =["Monday" , "Tuesday" , "Wednesday" , "Thursday" ,  "Friday" , "Saturday" , "Sunday" ];
// var x = prompt("Enter the day ");
// if(x == days[5]) {
//     alert("funday");
// }
// else if( x== days[6])
//  {
//     alert("funday");
// }
// else{
//     alert("not funday")
// }



// var today = new Date();
//   var hour = today.getHours();
//   var minute = today.getMinutes();
//   var prepand = (hour >= 12)? " PM ":" AM ";
//   hour = (hour >= 12)? hour - 12: hour;
//   if (hour===0 && prepand===' PM ') 
//   { 
//   if (minute===0 && second===0)
//   { 
//   hour=12;
//   prepand=' Noon';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' PM';
//   } 
//   } 
//   if (hour===0 && prepand===' AM ') 
//   { 
//   if (minute===0 && second===0)
//   { 
//   hour=12;
//   prepand=' Midnight';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' AM';
//   }  } 
// document.write("Current Time : "+hour  + " : " + minute  +  prepand);




// document.write("<h1>K-Elecric Bill</h1>");
// document.write("</br>");
// document.write("Customer Name: <b>ABC Customer</b>");
// document.write("</br>");
// document.write("Month: <b>Feburary</b>");
// document.write("</br>");
// document.write("No.of Units: <b>410</b>");
// document.write("</br>");
// document.write("Charges per unit: <b>16</b>");
// document.write("</br>");
// document.write("</br>");
// document.write("</br>");
// var unit =410;
// var charge = 16;
// var surcharge = 350
// var net = unit * charge;
// document.write("Net Amount Payable (within due date): " + " " + net );
// document.write("</br>");
// document.write("Late payment surcharge: " + " " + surcharge);
// var gross = net + surcharge;
// document.write("</br>");
// document.write("Gross amount payable (after due date): " + " " + gross);





// function tellTime() {
//  var now = new Date();
//  var theHr = now.getHours();
//  var theMin = now.getMinutes();
//  document.write("Current time: "+ theHr + ":" + theMin);
// }
// tellTime();


// function fname()
// {
// var name = "Mansoor ";
// var name2 = "Asad";
// var name3 = name+name2;
// document.write("My name is " + " " + name3);
// }
// fname();


// function sum(){
//     var num1= prompt("Enter First Number ");
//     var num2 = prompt("Enter Second Number ");
//     var sum1 = parseInt(num1) + parseInt(num2);
// document.write(sum1)
// }
// sum();


// function check_palindrome(str_entry){
//     var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-0]+/g,'');
//     var count = 0;
//     if (cstr ==="") {
//         document.write("nothing found");
//         return false;
//     }
//     if ((cstr.length) % 2 === 0){
//         ccount = (cstr.length) /2;

//     } else{
//         if (cstr.lenght === 1){
//             document.write("It is palindrome. ");
//             return true;
//         }
//         else{
//             ccount = (cstr.lenght -1) /2;
//         }
//     }
//     for (var x = 0; x < ccount; x++){
//         if (cstr[x] ! = cstr.slice(-1-x)[0]){
//             document.write("It is not palimdrome.");
//             return false;
//         }
//     }
//     document.write("It is Palindrome");
//     return true;
// }

// check_palindrome('madam');
// check_palindrome('mom');
// check_palindrome('fox');

