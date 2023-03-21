function all_primes():number[]{
  var primes:number[] = []
  for (let num:number=2;num<105000;num++){
    var flag:boolean = false;
    for (let i:number=2;i<num;i++){
    // for i in range(2, num){
      if ((num % i) == 0){
        // if factor is found, set flag to True
        flag = true
        break
      }
    }
    if (flag == false){
      primes.push(num)
    }
  }
  return primes
}

export function nth(num:number) {
  const primes = all_primes()
  if (num == 0){
    throw new Error("Prime is not possible")
  }
  return primes[num-1]
}
