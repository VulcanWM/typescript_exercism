const operations:string[] = ['plus', 'minus', 'multiplied', 'divided']
const betterOperations: { [key in 'plus' | 'minus' | 'multiplied' | 'divided']: Function } = {
  plus: (a: number, b: number): number => a + b,
  minus: (a: number, b: number): number => a - b,
  multiplied: (a: number, b: number): number => a * b,
  divided: (a: number, b: number): number => a / b,
}
export const answer = (question:string):number => {
  const problem:string[] = question
    .replace("What is", "")
    .replace('?', '')
    .replaceAll('by', '')
    .trim()
    .split(' ')
    .filter(t => t);
  if (!problem.length){
    throw new Error('Syntax error');
  } 
  if (problem.length == 1){
    return parseInt(problem[0])
  }
  var ans:number = 0;
  if (problem.length % 2 == 1){
    for (const x of Array(Math.floor(problem.length/2)).keys()) {
      let calc_index:number = ((x+1) * 2) - 1
      if (calc_index == 1){
        const operator = problem[1];
        if (operator in betterOperations) {
          const operation = betterOperations[operator as keyof typeof betterOperations];
          const operand1 = parseInt(problem[0]);
          const operand2 = parseInt(problem[2]);
          ans = operation(operand1, operand2);
        } else {
          throw new Error("Syntax error")
        }
      } else {
        const operator = problem[calc_index];
        if (operator in betterOperations) {
          const operation = betterOperations[operator as keyof typeof betterOperations];
          const operand2 = parseInt(problem[calc_index+1]);
          ans = operation(ans, operand2);
        } else {
          throw new Error("Syntax error")
        }
      }
    } 
  } else {
    const found = problem.some(r=> operations.includes(r))
    if (found){
      throw new Error("Syntax error")
    } else {
      throw new Error("Unknown operation")
    }
  }
  return ans
}
