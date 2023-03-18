const operations:string[] = ['plus', 'minus', 'multiplied', 'divided']

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
        if (operations.includes(problem[1])){
          if (problem[1] == "plus"){
            ans = parseInt(problem[0]) + parseInt(problem[2])
          } else if (problem[1] == "minus"){
            ans = parseInt(problem[0]) - parseInt(problem[2])
          } else if (problem[1] == "multiplied"){
            ans = parseInt(problem[0]) * parseInt(problem[2])
          } else if (problem[1] == "divided"){
            ans = parseInt(problem[0]) / parseInt(problem[2])
          }
        } else {
          throw new Error("Syntax error")
        }
      } else {
        if (operations.includes(problem[calc_index])){
          if (problem[calc_index] == "plus"){
            return ans + parseInt(problem[calc_index+1])
          } else if (problem[calc_index] == "minus"){
            return ans - parseInt(problem[calc_index+1])
          } else if (problem[calc_index] == "multiplied"){
            return ans * parseInt(problem[calc_index+1])
          } else if (problem[calc_index] == "divided"){
            return ans / parseInt(problem[calc_index+1])
          }
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
