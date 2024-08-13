var val1 = +prompt("Enter value One");
var val2 = +prompt("Enter value Two");
var operator = prompt("Enter Arithmatic operation");
var wording = "Your answer is ";

if (
  operator === "+" ||
  operator === "-" ||
  operator === "*" ||
  operator === "/" ||
  operator === "%"
) {
  if (operator === "+") {
    alert(wording + (val1 + val2));
  } else if (operator === "-") {
    alert(wording + (val1 - val2));
  } else if (operator === "*") {
    alert(wording + val1 * val2);
  } else if (operator === "/") {
    alert(wording + val1 / val2);
  } else if (operator === "%") {
    alert(wording + (val1 % val2));
  }
} else {
  alert("Invalid operator, please use ( + - * / )");
}
