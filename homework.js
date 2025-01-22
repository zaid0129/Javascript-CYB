// Ques.1:- Ask the user of their age and if it is greater than or equals to 18 with Ternory operator and display the result in alert.

function Question1 () {

    let age = prompt("enter your age");

    if(age>=18){
        alert("vote de skte hai ap ");
    }
    else {
        alert("ab ap vote to kya kuch bhi nhi de payege");
    }
    
}



// Ques.2:- Ask the user if they have completed a course and have a certificate by (Confirm). If both Ok then give a "Completed" message by Alert otherwise "Not completed"



function Question2 () {

    let course = confirm("Have you completed your course ? ");

    if(course) {
        let certificate = confirm("Do you have a certificate ? ");

        if (certificate) {
            alert("Completed");
        }
        else ("Not Completed");
    }

    else {
        alert ("Not Completed");
    }

}


// Ques.3:- Ask the user for the price of an item and (Confirm) whether they Apply a 10% discount if they confirm.



// DOUBT HAI BHUT TEZZZZZZZ

// function Question3 () {

//     let price = prompt("Enter the price of the item");

//     let discount = confirm("Coupon apply krna haiii ki nhiii saaf saaaf bolo ghumane wale kaam nhi hai bilkul");

//     if (discount) {
//         let discountprice = price-(price*0.1);
//         alert("The discounted price is" && {discountprice});
//     }

//     else {
//         alert("No Discount" && {price});
//     }

// }




// --------SOLUTION---------


function Question3() {

  let price = Number(prompt("Enter the price"))

  let discount = confirm("Coupon apply krna haiii ki nhiii saaf saaaf bolo ghumane wale kaam nhi hai bilkul")

  if(discount){
    alert(price*0.9);
  }
  else {
    alert(price);
  }



}


// Ques.4:- Ask the user for their exam score and determine if they passed or failed. (Above 33 Pass)


function Question4() {

let marks = prompt("Number batao bas baki ham apko apka BHAVISHYA bata dege");

if(marks>=33){
    alert("PAPPU beta pass ho gye ho")
}
else{
    alert ("belt khane ke liye taiyaar ho jao")
}

}


// Ques.5:- Check Entered number is even or odd.


function Question5 () {

        
    let valuee = prompt("enter number");
if(valuee%2==0){
    alert("even number")
}
else {
    alert("odd number")
}

}



// Ques.6:- Ask for conformation "Are you sure to delete" if Ok give message "Item Deleted" otherwise "Cancelled".



function Question6(){
    let Confirmation = confirm("Are you sure you want to delete?");
    if (Confirmation) {
      alert("Item deleted");
    } else {
      alert("Cancelled");
    }
    }



// Ques.7:- Check Entered number is Positive or Negative.


    function Question7() {
      let number = prompt("Please enter a number:");
      number = parseFloat(number);
      if (number > 0)
        alert(" positive");
      else{
        alert("negative");
    
      }
    }
    
    
    
// Ques.8:- Print 1-10 number in console by while loop.


    function Question8() {
      let i = 1;
        while (i <= 10) {
        console.log(i);
        i++;
      }
    }


    
// Ques.9:- Keep asking the user to input a number until they enter a number greater than 10 by do while loop.


    function Question9(){
    let number;
    do {
      number = prompt("Please enter a number greater than 10:");
      number = parseFloat(number);
      if (number != number) { 
        alert("That's not a valid number. Please try again.");
      }
    } while (number <= 10 || number != number);
    alert("You entered a number greater than 10, congrats " );
    }


// Ques.10:- Ask the user to enter a day of the week ( 1 for Monday, 2 for Tuesday, etc. ) and display the name of the day by switch.


    function Question10(){
    let daynumber = prompt("Enter a number between 1 and 7:");
    
    daynumber = parseInt(daynumber);
    let dayname;
    switch (daynumber) {
      case 1:
        dayname = "Monday";
        alert("monday")
        break;
      case 2:
        dayname = "Tuesday";
        alert("tuesday")
        break;
      case 3:
        dayname = "Wednesday";
        alert("wednesday")
        break;
      case 4:
        dayname = "Thursday";
        alert("thursday")
        break;
      case 5:
        dayname = "Friday";
        alert("friday")
        break;
      case 6:
        dayname = "Saturday";
        alert("saturday")
        break;
      case 7:
        dayname = "Sunday";
        alert("sunday")
        break;
      default:
        dayname = "Invalid number, please enter a number between 1 and 7.";
        break;
    }
    }


// Question 11


    function Question11() {

      let num = Number(prompt("Guess the number btw 1 - 20"))

      if (num=15){
        alert("jeeeet gyiiiiiiiiiii");
      }

      else if (num!=15){
        alert("koi line nhi");
      }

      // else (num!=15) {
      //   alert("ab to aur koi line nhi hai ");
      // }

    }