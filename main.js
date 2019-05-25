const GTInput = document.querySelectorAll(".gt-input");

for (let i = 0; i < GTInput.length; i++) {
  let currentLabel = GTInput[i].parentElement.firstElementChild;

  if (GTInput[i].value !== "") {
    currentLabel.classList.add("move-up");
  }

  GTInput[i].addEventListener("focus", function () {
    currentLabel.classList.add("move-up");
  })

  GTInput[i].addEventListener("blur", function () {
    if (GTInput[i].value === "") {
      currentLabel.classList.remove("move-up");
    }
  })
}