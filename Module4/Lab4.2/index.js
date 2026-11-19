const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (value === "C") {
      display.value = "0";
    } else if (value === "=") {
      display.value = eval(display.value);
    } else {
      if (display.value === "0") {
        display.value = value;
      } else {
        display.value += value;
      }
    }
  });
});
