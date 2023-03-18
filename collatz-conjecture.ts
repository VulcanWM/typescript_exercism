export function steps(count: number): number {
  if (count <= 0) {
    throw new Error('Only positive numbers are allowed')
  }
  var steps:number = 0
  var num:number = count
  while (num != 1){
    if (num % 2 == 0){
      num = num/2
    } else {
      num = num * 3 + 1
    }
    steps ++
  }
  return steps
}
