//ASSIGNMENT 35-38: // FUNCTION

//Question / 01:

function displayCurrentDateTime() {
    var currentDate = new Date();
    document.write(currentDate);
  }
  
  displayCurrentDateTime();

  //Question / 02:

  function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    var greeting = "Hello, " + fullName + "! Welcome!";
    return greeting;
  }
  var userFirstName = prompt("Enter your first name: ");
  var userLastName = prompt("Enter your last name: ");
  var greetingMessage = greetUser(userFirstName, userLastName);
  document.write(greetingMessage);

  //Question / 03:

  function addNumbers() {
    var num1 = +prompt("Enter the first number: ");
    var num2 = +prompt("Enter the second number: ");
    var sum = num1 + num2;
    return sum;
  }
  var result = addNumbers();
  document.write("The sum is: " + result);

  //Question / 04:

  function calculate(num1, num2, operator) {
    if (operator === '+') {
      return num1 + num2;
    } else if (operator === '-') {
      return num1 - num2;
    } else if (operator === '*') {
      return num1 * num2;
    } else if (operator === '/') {
      return num1 / num2;
    } else {
      return "Invalid operator";
    }
  }
  var num1 = +prompt("Enter the first number: ");
  var num2 = +prompt("Enter the second number: ");
  var operator = prompt("Enter the operator (+, -, *, /): ");

  var result = calculate(num1, num2, operator);
  document.write("The result is: " + result);

  //Question / 05:

  function square(number) {
    return number * number;
  }
  var num = 5;
  var result = square(num);
  document.write("The square of " + num + " is: " + result);

  //Question / 06:

  function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
  var num = 6;
  var result = factorial(num);
  document.write("The factorial of " + num + " is: " + result);

  //Question / 07:

  function countNumbers(start, end) {
    if (start <= end) {
      for (var i = start; i <= end; i++) {
        document.write(i + "<br>");
      }
    } else {
      for (var j = start; j >= end; j--) {
        document.write(j + "<br>");
      }
    }
  }
  countNumbers(1, 10);

  //Question / 08:

  function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(side) {
      return side * side;
    }
  
    var baseSquared = calculateSquare(base);
    var perpendicularSquared = calculateSquare(perpendicular);
    var hypotenuseSquared = baseSquared + perpendicularSquared;
    var hypotenuse = Math.sqrt(hypotenuseSquared);
      return hypotenuse;
  }
  var baseLength = 3;
  var perpendicularLength = 4;
  var hypotenuse = calculateHypotenuse(baseLength, perpendicularLength);
  document.write("The hypotenuse length is: " + hypotenuse);

  //Question / 09:

  function calculateRectangleArea(width, height) {
    var area = width * height;
    return area;
  }
  var width = 5;
  var height = 10;
  var area2 = calculateRectangleArea(width, height);
  document.write("Area (Arguments as Variables): " + area2);

  //Question / 10:

  function isPalindrome(str) {
    
    var formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    var reversedStr = formattedStr.split('').reverse().join('');
    return formattedStr === reversedStr;
  }
  var str1 = "madam";
  document.write("Is '" + str1 + "' a palindrome? " + isPalindrome(str1) + "<br>");
  
  var str2 = "hello";
  document.write("Is '" + str2 + "' a palindrome? " + isPalindrome(str2));

  //Question / 11:

  function capitalizeFirstLetter(str) {
    var words = str.split(' ');
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    
    var capitalizedStr = words.join(' ');
    return capitalizedStr;
  }
  var str = 'the quick brown fox';
  var capitalizedStr = capitalizeFirstLetter(str);
  document.write("Original string: " + str + "<br>");
  document.write("Capitalized string: " + capitalizedStr);

  //Question / 12:

  function findLongestWord(str) {
    var words = str.split(' ');
  
    var longestWord = '';
    var longestLength = 0;
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
  
      if (word.length > longestLength) {
        longestWord = word;
        longestLength = word.length;
      }
    }
    return longestWord;
  }
  var str = 'Web Development Tutorial';
  var longestWord = findLongestWord(str);
  document.write("Original string: " + str + "<br>");
  document.write("Longest word: " + longestWord);

  //Question / 13:

  function countLetterOccurrences(str, letter) {
    var count = 0;
  
    var lowerStr = str.toLowerCase();
    var lowerLetter = letter.toLowerCase();
  
    for (var i = 0; i < lowerStr.length; i++) {
      var currentLetter = lowerStr.charAt(i);
  
      if (currentLetter === lowerLetter) {
        count++;
      }
    }
     return count;
  }
  var str = 'JSResourceS.com';
  var letter = 'o';
  var occurrences = countLetterOccurrences(str, letter);
  document.write("Original string: " + str + "<br>");
  document.write("Number of occurrences of letter '" + letter + "': " + occurrences);

  //Question / 14:

function calcCircumference(radius) {
  var circumference = 2 * Math.PI * radius;
  document.write("Circumference of circle = " + circumference.toFixed(2) + "<br>");
}

function calcArea(radius) {
  var area = Math.PI * Math.pow(radius, 2);
  document.write("Area of circle = " + area.toFixed(2));
}
var radius = 5;
calcCircumference(radius);
calcArea(radius);

    
    
    

    
  
  
    
  




  
  