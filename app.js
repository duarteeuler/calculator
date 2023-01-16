// get buttons and display
const buttons = document.querySelectorAll(".digit, .operator");
const display = document.querySelector("#display");
const clearButton = document.querySelector("#clear");
const equalsButton = document.querySelector("#equals");
let operator = "";
let a = "";
let b = "";
//add event listener to buttons
buttons.forEach(button => {
  button.addEventListener("click", e => {
    //get innertext from button and append to display
    let buttonText = e.target.innerText;
    display.innerText += buttonText;

    //equals function with second operator being the starter
    if((buttonText === "+"|| buttonText === "-"|| buttonText === "*"|| buttonText === "/") 
    && (operator === "+"||operator === "-"||operator === "*"||operator === "/")){
      a = parseInt(a);
      b = parseInt(b);
      console.log("value a ="+a);
      console.log("entered");
      let result = operate(a, b, operator);
      display.innerText = result+buttonText;
      a = result;
      b = "";
      operator = "";
    }

    //save inputs a , operator, b
    if(buttonText === "+"|| buttonText === "-"|| buttonText === "*"|| buttonText === "/"){
      operator= buttonText;
      console.log("entered if operators");
      buttonText = "";
    }

    if(operator==""){
      a = display.innerText;
    }

    else{
      b += buttonText;
    }
  });
});

clearButton.addEventListener("click", e => {
  a = "";
  b = "";
  operator = "";
  display.innerText = "";
})

equalsButton.addEventListener("click", e => {
  a = parseInt(a);
  b = parseInt(b);
  let result = operate(a, b, operator);
  display.innerText = result;
});

//exec all simple operations
function operate (a, b, operator){
  if(operator === "+"){
      let sum = a+b;
      return sum;
  }

  if(operator == "-"){
      let sub = a-b;
      return sub;
  }

  if (operator == "*"){
    let mult = a*b;
    return mult;
  }

  if (operator == "/"){
      let divide = a/b;
      return divide;
  }
}