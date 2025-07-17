const result = document.querySelector(".result");
const buttons = document.querySelectorAll("button");
let number1 = "";
let sign = "";

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let value = e.target.textContent;

  
    if (e.target.classList.contains("remove")) {
      result.textContent = "";
      number1 = "";
      sign = "";
    }

    if (e.target.classList.contains("numbers")) {
    
      if (result.textContent === "0") {
        result.textContent = value;
      } else {
        result.textContent += value;
      }
    }

  
    if (e.target.classList.contains("sign")) {
      if (sign === "") {
        number1 = result.textContent;
        sign = value;
        result.textContent += value;
      }
    }

    // Evaluate the expression when the "equal" button is clicked
    if (e.target.classList.contains("equal")) {
      let expression = result.textContent;
      try {
        result.textContent = eval(expression.replace("x", "*"));
      } catch {
        result.textContent = "Error";
      }
    }
  });
});
