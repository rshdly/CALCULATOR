const result = document.getElementById("inputtext");

const calculate = (number) => {
  if (isInvalidExpression()) {
    clearResult();
  } else {
    result.value += number;
  }
};

const calculateResult = () => {
  try {
    const expression = result.value;
    if (expression) {
      result.value = eval(expression);
    }
  } catch (err) {
    displayError("Invalid Expression");
  }
};

const clearResult = () => {
  result.value = "";
  resetDisplayStyle();
};

const deleteLastCharacter = () => {
  if (isInvalidExpression()) {
    clearResult();
  } else {
    result.value = result.value.slice(0, -1);
  }
};

const isInvalidExpression = () => {
  return result.value === "Error: Invalid Expression";
};

const displayError = (message) => {
  result.value = "Error: " + message;
  setResultDisplayStyle("#b34013", "15px", "sans-serif");
};

const resetDisplayStyle = () => {
  result.style.color = "";
  result.style.fontSize = "";
  result.style.fontFamily = "";
};

const setResultDisplayStyle = (color, fontSize, fontFamily) => {
  result.style.color = color;
  result.style.fontSize = fontSize;
  result.style.fontFamily = fontFamily;
};
