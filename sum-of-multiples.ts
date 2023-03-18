export function sum(factors:number[],end_num:number):number{
  var sum:number=0;
  for (let i=1;i<end_num;i++){
    var multiple:boolean = false;
    factors.forEach((number, index) => {
      if (i%number == 0){
        multiple = true;
      }
    });
    if (multiple != false){
      sum += i
    }
  }
  return sum
}
