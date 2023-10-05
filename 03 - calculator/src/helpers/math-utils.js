export const calculateResult = (leftOperand, operator, RightOperand) => {
    const result = null;
    switch(operator) {
        case '+':
          result = leftOperand + RightOperand;
          break;
        case '-':
          result = leftOperand - RightOperand;
          break;
        case 'x':
          result = leftOperand * RightOperand;
          break;
        case '/':
          result = leftOperand / RightOperand;
          break;
        case '%':
          result = leftOperand % RightOperand;
          break;
        default:
          break;
      }
    return result;
}