// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
// 2) Output ("alert") the three variable values
// 3) Try "grouping" the three variables together and still output their values thereafter
// 4) Also output the second element in your "main goals" variable
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
// 6) Execute your custom command from (5) and output ("alert") the result

let cName = "100days";
let price = "$14.99";
let goals = ["intrinsic", "germane", "confidence"];

// alert(cName + price + goals);

let courseDetails = {
  cName: "100Days",
  price: "$14.99",
  goals: ["intrinsic", "germane", "confidence"],
};

// alert(JSON.stringify(courseDetails));
// alert(courseDetails.goals[1]);

function alertGoal(array, index) {
  alert(array[index]);
}

// alertGoal(goals, 2);

goals2 = ["10", "20", "30"];
// alertGoal(goals2, 2);

// // Exercise Time!

// // 1. Select the <h1> element by "drilling into the DOM" and
// //    save it in a variable with a name of your choice
// h1Element = document.body.children[0];
// console.log(h1Element);
// // 2. Use the variable from (1) and get access to the "parent"
// //    element of the stored <h1> element (i.e. to the <body> element)
// //    BONUS: Try using the variable from (1) to get access to the
// //    sibling element (i.e. the <p> element next to the <h1> element)
// console.log(h1Element.parentElement);
// pElement = h1Element.nextElementSibling;
// console.log(pElement);
// // 3. Select the <h1> element with getElementById and store in
// //    the same or a new variable (up to you)
// console.log(document.getElementById("title"));
// // 4. Select the second <p> element with querySelector (you might
// //    need to add something in the HTML code, e.g. a class)
// //    and store it in a new variable with a name of your choice
// p2Element = document.querySelector(".p2");
// console.log(p2Element);
// // 5. BONUS TASK: Try changing the text content of the <p> element
// //    you selected in (4) and set it to any other text of your choice
// p2Element.textContent = "This is altered text";

p1Element = document.querySelector("#p1");
// newAnchorElement = document.createElement("a");
// newAnchorElement.textContent = "Test";
// newAnchorElement.href = "https://google.com";
// p1Element.appendChild(newAnchorElement);

document.getElementById("p3").remove();

p1Element.parentElement.append(p1Element);

p1Element.innerHTML = "Hi! this is a <strong>inner html content</strong>";
