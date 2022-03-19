inputElement = document.getElementById("input");
spanElement = document.getElementById("counter");

let counter = 60;

function updateText(event) {
  counter--;
  spanElement.textContent = counter;

  if (counter <= 10) inputElement.style.backgroundColor = "yellow";
  //   console.log(event.target.value);
}

inputElement.addEventListener("input", updateText);
