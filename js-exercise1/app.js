inputElement = document.getElementById("input");
spanElement = document.getElementById("counter");

let counter = 0;

function updateText(event) {
  counter = event.target.value.length;
  // console.log(event.target.value.length);
  spanElement.textContent = counter;

  if (counter >= 50) {
    inputElement.classList.add("warning");
    spanElement.classList.add("warning");
  } else {
    inputElement.classList.remove("warning");
    spanElement.classList.remove("warning");
  }
  //   console.log(event.target.value);
}

inputElement.addEventListener("input", updateText);
