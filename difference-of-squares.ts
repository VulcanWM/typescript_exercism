export class Squares {
  public count!:number;
  constructor(count: number) {
    this.count = count;
  }

  get sumOfSquares(): number {
    let sum = 0;
    for (let i = 1; i <= this.count ; i++) {
        sum += i ** 2;
    }
    return sum;
  }

  get squareOfSum(): number {
    let sum = 0;
    for (let i = 1; i <= this.count ; i++) {
        sum += i;
    }
    return sum ** 2;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares ;
  }
}
