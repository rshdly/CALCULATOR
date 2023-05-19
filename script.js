const result = document.getElementById("inputtext");

const calculate = (number) => {
  result.value += number;
};

const calculateResult = () => {
  try {
    result.value = eval(result.value);
  } catch (err) {
    result.value = "Error: Invalid Expression";
    result.style.color = "#b34013";
    result.style.fontSize = "15px";
    result.style.fontFamily = "sans-serif";
    
  }
};


const clearResult = () => {
  result.value = "";
  location.reload();
 
  
};

const deleteLastCharacter = () => {
  result.value = result.value.slice(0, -1);
};
