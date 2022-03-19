// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"

removeParaButton = document.querySelector("button");
//    - Select the second button by using an "id"
addBlueBCButton = document.getElementById("bcButton");
// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
// function removeParagraph() {
//   console.dir(removeParaButton);
// }
// removeParaButton.addEventListener("click", removeParagraph);
// //    - Output the second button WITHOUT using the variable in which it's stored
// function changeBColor(event) {
//   console.dir(event.target);
// }
// addBlueBCButton.addEventListener("click", changeBColor);
// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
firstPara = document.body.childNodes[5].childNodes[3];
//console.dir(firstPara);
// console.dir(document.body);
thirdPara = document.body.childNodes[5].childNodes[7];
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue
function removeParagraph() {
  thirdPara.remove();
}
removeParaButton.addEventListener("click", removeParagraph);
//    - Output the second button WITHOUT using the variable in which it's stored
// function changeBColor(event) {
//   firstPara.style.backgroundColor = "blue";
// }
// addBlueBCButton.addEventListener("click", changeBColor);
// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!
function changeBColor(event) {
  //   firstPara.style.backgroundColor = "blue";
  firstPara.classList.add("blue-bg");
}
addBlueBCButton.addEventListener("click", changeBColor);
