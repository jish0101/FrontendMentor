class Calculator {
  constructor(currentOperandEl, previousOperandEl) {
    this.currentOperandEl = currentOperandEl;
    this.previousOperandEl = previousOperandEl;
    this.limit = 14;
    this.resetCalc();
  }

  resetCalc() {
    this.previousOperand = "";
    this.currentOperand = "";
    this.currentOperandDisplay = "0";
    this.operator = undefined;
    this.displayCalc();
  }

  displayCalc() {
    if (this.isMaxSafeInteger() === true) return;
    this.currentOperandEl.textContent = this.getDisplayNumber(
      this.currentOperandDisplay
    );
    this.previousOperandEl.textContent =
      this.operator != undefined
        ? `${this.getDisplayNumber(
            this.previousOperand
          )} ${this.displayOperator(this.operator)}`
        : "";
  }
  appendNum(number) {
    if (number === ".") {
      if (this.currentOperand.toString().includes(".")) return;
      if (this.currentOperand.toString() === "") {
        this.currentOperand = "0";
      }
    }
    this.currentOperand = this.currentOperand.toString() + number.toString();
    this.currentOperandDisplay = this.currentOperand;
    this.displayCalc();
  }

  getDisplayNumber(number) {
    let stringNumber = number.toString();
    let intergerDigits = parseFloat(stringNumber.split(".")[0]);
    let integerString = stringNumber.split(".")[0];
    let decimalString = stringNumber.split(".")[1];
    let integerDisplay;
    let finalDisplay;

    if (isNaN(intergerDigits)) {
      integerDisplay = "";
    } else {
      if (integerString.length >= this.limit) {
        intergerDigits = intergerDigits.toExponential(5);
      }
      integerDisplay = intergerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalString != null) {
      if (integerString.length < this.limit) {
        let intLength = this.limit - integerString.length;
        if (intLength < decimalString.length) {
          decimalString = decimalString.slice(0, intLength - 1);
        }
      }
      finalDisplay = this.displayComputedString(integerDisplay, decimalString);
      finalDisplay =
        finalDisplay.charAt(this.limit - 1) === "."
          ? finalDisplay.slice(0, -1)
          : finalDisplay;
    } else {
      finalDisplay = integerDisplay;
    }
    return finalDisplay;
  }

  displayComputedString(integerNum, decimalNum) {
    return `${integerNum}.${decimalNum}`;
  }

  isMaxSafeInteger() {
    if (this.currentOperand > Number.MAX_SAFE_INTEGER) {
      this.currentOperandEl.textContent = "Too big!";
      this.currentOperand = "";
      this.previousOperand = "";
      this.operator = undefined;
      return true;
    } else return false;
  }

  displayOperator(operator) {
    switch (operator) {
      case "+":
        return "+";
      case "-":
        return "−";
      case "*":
        return "×";
      case "/":
        return "÷";
      default:
        return;
    }
  }

  selectOperator(operator) {
    if (this.currentOperand === "" || this.currentOperand === "0") {
      if (this.previousOperand != "") {
        this.operator = operator;
        this.displayCalc();
        return;
      } else return;
    }
    if (this.previousOperand != "") {
      this.compute();
    }
    this.operator = operator;

    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
    this.currentOperandDisplay = this.currentOperand;
    this.displayCalc();
  }

  deleteNum() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
    this.currentOperandDisplay = this.currentOperand;
    this.displayCalc();
  }

  compute() {
    let computation;
    const previous = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    if (this.previousOperand === "" || this.currentOperand === "") return;
    if (isNaN(previous) || isNaN(current)) return;

    switch (this.operator) {
      case "+":
        computation = previous + current;
        break;
      case "-":
        computation = previous - current;
        break;
      case "*":
        computation = previous * current;
        break;
      case "/":
        computation = previous / current;
        break;
      default:
        return;
    }

    this.currentOperand = Number.parseFloat(computation.toFixed(this.limit));
    this.previousOperand = "";
    this.operator = undefined;
    this.currentOperandDisplay = this.currentOperand;
    this.displayCalc();
  }
}

const calcEl = document.querySelector(".calculator");
const currentOperandEl = document.querySelector("[data-current]");
const previousOperandEl = document.querySelector("[data-previous]");

const calculator = new Calculator(currentOperandEl, previousOperandEl);

calcEl.addEventListener("click", (e) => {
  const key = e.target;
  handleActions(key);
});

window.addEventListener("keydown", (e) => {
  if (e.key === "/") {
    e.preventDefault();
  }
  const allKeys = "1234567890.+-*/";
  const key = e.key;

  if (
    allKeys.includes(key) ||
    key === "Enter" ||
    key === "Escape" ||
    key === "Delete"
  ) {
    const keyPressed = document.querySelector(`button[value="${key}"]`);
    keyPressed.focus();
    handleActions(keyPressed);
  }
  return;
});

function handleActions(key) {
  switch (true) {
    case key.hasAttribute("data-operator"):
      calculator.selectOperator(key.value);
      break;
    case key.hasAttribute("data-number"):
      calculator.appendNum(key.value);
      break;
    case key.value === "Escape":
      calculator.resetCalc();
      break;
    case key.value === "Enter":
      calculator.compute();
      break;
    case key.value === "Delete":
      calculator.deleteNum();
      break;
    default:
      return;
  }
}
