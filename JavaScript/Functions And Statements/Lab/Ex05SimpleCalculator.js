function calculate(num1, num2, operation){
    const add = (a, b) => a + b;
    const subtract = (a, b) => a- b;
    const divide = (a, b) => a / b;
    const multiply = (a, b) => a * b;
    const operationMap = {
        add: add,
        subtract: subtract,
        divide: divide,
        multiply: multiply,
    }
    return operationMap[operation](num1, num2);
}