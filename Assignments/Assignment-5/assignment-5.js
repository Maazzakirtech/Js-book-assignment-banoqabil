//ASSIGNMENT 05: // MATH EXPRESSIONS

//Question / 01:

/*var number = 3;
var another_nmbr = 5;
var Total_nmbr = number + another_nmbr;
document.write('Sum of ' + number + ' and ' + another_nmbr + ' is ' + Total_nmbr);*/

//Question / 02: 
// (task 1 repeated in subtraction)

/*var number = 3;
var another_nmbr = 5;
var Total_nmbr = another_nmbr - number;
document.write('Subtraction of ' + number + ' and ' + another_nmbr + ' is ' + Total_nmbr);*/

// (task 1 repeated in multiplication)

/*var number = 3;
var another_nmbr = 5;
var Total_nmbr = number * another_nmbr;
document.write('Multiplication of ' + number + ' and ' + another_nmbr + ' is ' + Total_nmbr);*/

// (task 1 repeated in division)

/*var number = 3;
var another_nmbr = 5;
var Total_nmbr = number / another_nmbr;
document.write('Division of ' + number + ' and ' + another_nmbr + ' is ' + Total_nmbr);*/


//Question / 03:

/*var myVariable;
document.write('Value after variable declaration is ', myVariable , '</br>');


myVariable = 5;
document.write('Initial value: ', myVariable,'</br>');

myVariable++;
document.write('Value after increment is: ', myVariable , '</br>');

myVariable += 7;
document.write('Value after addition is: ' , myVariable , '</br>');

myVariable--;
document.write('Value after decrement is: ' , myVariable, '</br>');


var remainder = myVariable % 3;
document.write('the remainder is: ' , remainder, '</br>');*/

//Question / 04:

/*var one_ticket = 600;
var five_tickets = 5;
document.write('Total cost to buy 5 tickets to a movie is ' + one_ticket * five_tickets + ' PKR');*/

//Question / 05:

/*var i;
for (i=1; i <= 10; i++) {

    document.write('4x ' + i + ' = ' + 4 * i + '</br>')
}*/

//Question / 06:

//Celsius to Fahrenheit conversion
/*var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;
document.write(celsius + "°C  is " + fahrenheit + "°F" + "</br>");

// Fahrenheit to Celsius conversion
var fahrenheit2 = 70;
var celsius2 = (fahrenheit2 - 32) * 5/9;
document.write(fahrenheit2 + "°F  is " + celsius2 + "°C");*/


//Question / 07:

/*var Item_one_price = 650;
var Item_one_quantity = 3;
var Item_one_total = Item_one_price * Item_one_quantity;
var Item_two_price = 100;
var Item_two_quantity = 7;
var Item_two_total = Item_two_price * Item_two_quantity;
var shiping_chrg = 100;
var Total_ammount = Item_one_total + Item_two_total + shiping_chrg;
document.write('<h1>Shoping Cart</h1>' + '</br>' + 'Price of item 1 is 650 ' + '</br>' +  'Quantity of item 1 is 3' + '</br>' +  'Price of item 2 is 100' + '</br>' + 'Quantity of item 2 is 7' + '</br>' + 'Shiping charges is 100'  +  '</br>' + '</br>' + 'Total cost of your order is ' + Total_ammount);*/

//Question / 08:

/*var Marks_obtained = 804;
var Marks_toyal = 980;
var Percentage = Marks_obtained / Marks_toyal * 100;
document.write('<h1>Marks Sheet</h1>' + '</br>' + 'Total marks: 980' + '</br>' + 'Marks obtained: 804' + '</br>' + 'Percentage: ' + Percentage + '%');*/

//Question / 09:

/*var dollar = 104.80;
var riyal = 28;
document.write('<h1>Currency in PKR</h2>'+'</br>'+'Total currency in PKR:', (dollar*10)+(riyal*25));*/

//Question / 10:

var number = 5 * 10 / 2;
document.write(number);

//Question / 11:

var current_year = 2016; 
var birth_year = 1992; 
var age1 = current_year - birth_year
var age2 = age1 - 1
document.write("<h1>Age Calculator</h1></br>Current Year: 2016</br> Birth Year: 1992 </br>They are either ", age1, " or ", age2, " years old.");

//Question / 12:

var radius = +prompt("Enter the radius of the circle:");
var circumference = 2 * Math.PI * radius;
document.write("The circumference is", circumference);

var area = Math.PI * Math.pow(radius, 2);
document.write("The area is", area);


//Question / 13:

var favorite_snakes ="Chocolate chip"  
var current_age = 15;  
var maximum_age = 65;  
var amount_per_day = 3;  
var remaining_age = maximum_age - current_age;
var total_snacks = remaining_age * amount_per_day;
document.write("You will need " +  total_snacks + " " + favorite_snakes  +  " to last you until the ripe old age of "  + maximum_age);

