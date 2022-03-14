// let age = 32;
// let name = "Deepak";
// let hobbies = ["lifting", "eating", "sleeping"];
// let job = {
//   title: "director",
//   site: "urbandale",
//   salary: 5000,
// };

// function calc(age) {
//   let result = age - 18;
//   return result;
// }

// let adultYears = calc(age);
// age = 52;
// adultYears = calc(age);

// console.log(hobbies[0]);
// console.log(job.salary);
// console.log(adultYears);

// console.log(window);
// window.document.body.children[1].children[0].href = "https://google.com";

pElement = document.querySelector("p");
inputElement = document.getElementById("input");
let counter = 0;

function changeText(event) {
  pElement.textContent = "Clicked!";
  console.log(event);
}

function updateText(event) {
  counter++;
  pElement.textContent = counter;
  console.log(event.target.value);
}

pElement.addEventListener("click", changeText);
inputElement.addEventListener("input", updateText);
