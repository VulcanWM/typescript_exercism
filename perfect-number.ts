export function classify(num:number):string {
  if (num < 1){
    throw new Error("Classification is only possible for natural numbers.")
  }
  var factors:number[] = []
  for(let i = 1; i < num; i++) {
    if(num % i == 0) {
      factors.push(i)
    }
  }
  var sum:number = factors.reduce((a, b) => a + b, 0)
  if (sum == num){
    return "perfect"
  } else if (sum > num){
    return "abundant"
  } else {
    return "deficient"
  }
}
