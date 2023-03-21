export class Rational {
  private numerator: number;
  private denominator: number;
  
  constructor(numerator: number, denominator: number) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  public add(r: Rational): Rational {
    return new Rational(
      this.numerator * r.denominator + r.numerator * this.denominator,
      this.denominator * r.denominator
    ).reduce();
  }

  public sub(r: Rational): Rational {
    return new Rational(
      this.numerator * r.denominator - r.numerator * this.denominator,
      this.denominator * r.denominator
    ).reduce();
  }

  public mul(r: Rational):Rational {
    return new Rational(
      this.numerator * r.numerator,
      this.denominator * r.denominator
    ).reduce();
  }

  public div(r: Rational):Rational {
    return new Rational(
      this.numerator * r.denominator,
      r.numerator * this.denominator
    ).reduce();
  }

  public abs() {
    return new Rational(
      Math.abs(this.numerator),
      Math.abs(this.denominator)
    ).reduce();
  }

  public exprational(expnum:number):Rational {
    if (expnum >= 0){
      return new Rational(
        this.numerator**expnum,
        this.denominator**expnum
      ).reduce();
    } else {
      return new Rational(
        this.denominator**Math.abs(expnum),
        this.numerator**Math.abs(expnum)
      ).reduce();
    }
  }

  public expreal(expnum: number):number {
    return this.nthRoot(expnum, this.denominator) ** this.numerator;
  }

  public reduce(): Rational {
    var divisor = this.gcd(
      Math.abs(this.numerator),
      Math.abs(this.denominator)
    );
    if (this.denominator >= 0) {
      return new Rational(this.numerator / divisor, this.denominator / divisor);
    }
    return new Rational(
      (this.numerator * -1) / divisor,
      (this.denominator * -1) / divisor
    );
  }

  private gcd(x: number, y: number): number {
    return y == 0 ? x : this.gcd(y, x % y);
  }

  private nthRoot(expnum: number, n: number): number {
    return Math.pow(expnum, 1 / n);
  }
}
