export function compute(left: string, right: string): number {
  if (left.split("").length != right.split("").length){
    throw new Error("DNA strands must be of equal length.")
  }
  var count:number = 0
  for (let i=0;i<left.split("").length;i++){
    if (left[i] != right[i]){
      count++
    }
  }
  return count
}
