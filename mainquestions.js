// 1. Create a program that asks the user for their name using prompt.
//    If the name is entered, show a welcome message using alert. If the
//    user clicks cancel, show a message saying, "No name entered."

function question1() {
    let name = prompt("Enter your name");
    if (name) {
      alert("Welcome, " + name);
    } else {
      alert("no name entered");
    }
  }
  
  // 2. Write a program using confirm that asks the user, "Do you want to delete this file?"
  //    If they confirm, display "File deleted." Otherwise, display "File not deleted."
  
  function question2() {
    let conf = confirm("Are you sure you want to delete this file");
    if (conf) {
      alert("File deleted");
    } else {
      alert("File not deleted");
    }
  }
  
  // 3. Write a program to print all numbers from 1 to 50 that are divisible by 5 using a for loop.
  
  function question3() {
    let num = 50;
    for (let i = 0; i < 50; i++) {
      if (i % 5 === 0) {
        console.log(i + " is divisible by 5");
      }
    }
  }
  
  // 4 .Write a program that asks the user to enter a number and calculates the sum of
  //    all numbers from 1 to that number using a while loop.
  function question4() {
    let user = prompt("Enter a number");
    let i = 1;
    let sum = 0;
    while (i <= user) {
      sum += i;
      i++;
    }
    window.alert(sum);
  }
  
  // 5 .Write a program that takes a full name from the user and:
  //    Converts it to uppercase.
  //    Finds the length of the name.
  //    Extracts the first name .
  
  function question6() {
    let name = prompt("enter your full name");
  
    if (name) {
      console.log(name.toUpperCase());
      console.log(name.length);
      console.log(name.split(" ")[0]);
    } else {
      alert("no name entered");
    }
  }
  
  // 6. Write a program that checks if a user-entered string is a palindrome
  //    (a word that reads the same backward as forward).
  
  function question6() {
    let word = prompt("Enter a word"); //madam
    let reverse = word.split("").reverse().join("");
    if (word === reverse) {
      console.log("It is a palindrome");
    } else {
      console.log("It is not a palindrome");
    }
  }
  
  // 7. Given an array of numbers [5, 8, 12, 20, 7], write a program to:
  //    Add a new number at the beginning of the array.
  //    Remove the last number from the array.
  
  function question7() {
    let numbers = [5, 8, 12, 20, 7];
    numbers.unshift(11);
    numbers.pop();
    console.log(numbers);
  }
  
  // 8. Write a program to join an array of words ["Hello", "World", "JavaScript"]
  //    into a single sentence and display it.
  
  function question8() {
    let words = ["Hello", "World", "JavaScript"];
    console.log(words.join(" "));
  }
  
  // 9. Create an HTML page with an image and a button. When the button is clicked,
  //    change the image to a different one (use the src property).
  
  function question9() {
    let img = document.querySelector("#Image");
    img.src = "./images.jpeg";
  }
  
  // 10. Create a web page with a button. When clicked, use an inline onclick event to
  //     display an alert saying, "Button Clicked!".
  
  function question10() {
  alert("Button Clicked")
  }
  
  // 11. Create two buttons:
  //    Button 1: Prompt the user to enter their favorite subject.
  //    Button 2: Display "Your favorite subject is: [subject]" in an <h4> tag using innerHTML.
  
  let sub;
  function question11() {
     sub= prompt("Enter your subject");
  }
  function question11btn() {
    sub= document.querySelector(".heading").innerHTML=("Your favourite subject is"+ sub);
  }
  
  // 12.Create a button that:
  //   Prompts the user for a sentence.
  //   Convert the entered sentence into uppercase.Display the result inside a <p> tag.
  
  function question12() {
      let sent = prompt("Enter a sentence");
      let para = document.querySelector(".para");
      para.innerHTML = sent.toUpperCase();
  }
  
  
  // 13. Create a simple form where:
  //    The user enters a number in prompt.
  //   When they click a button, print the sum of numbers from 1 to
  // the entered number inside a <p> tag.
  
  function question13() {
    let num = prompt("Enter a number");
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    let para = document.querySelector(".para");
    para.innerHTML = sum;
  }