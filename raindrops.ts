export function convert(num:number):string {
  var result:string = "";
  if (num%3 == 0){
    result += "Pling"
  }
  if (num%5 == 0){
    result += "Plang"
  }
  if (num%7 == 0){
    result += "Plong"
  }
  if (result == ""){
    result = num.toString();
  }
  return result
}
