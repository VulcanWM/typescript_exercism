export class DiffieHellman {
  private a!: number
  private b!: number
  
  constructor(public p: number, public g: number) {
    this.throwConstructorErrors()
    this.generateKeys()
  }
  
  private generateKeys(): void {
    const { floor, random } = Math
    this.a = floor(random() * this.p)
    this.b = floor(random() * this.p)
  }
  
  private throwConstructorErrors(): void {
    function isPrime(num: number): boolean {
      for(let i = 2; i < num; i += 1) {
        if(num % i === 0) return false;
      }
      return num > 1;
    }
    
    if (
      this.p < 1 || this.p > 100 ||
      this.g < 1 || this.g > 100
    ) throw new Error('Out of range')
    if (!isPrime(this.p) || !isPrime(this.g)) throw new Error('Not prime')
  }
  
  public getPublicKey(privateKey: number): number {
    if (privateKey <= 1) throw new Error('Negative private key')
    const value = Math.pow(this.g, privateKey) % this.p
    if (privateKey >= value) throw new Error('key greater than modulus param p')
    return value
  }
  
  public getSecret(theirPublicKey: number, myPrivateKey: number): number {
    return Math.pow(theirPublicKey, myPrivateKey) % this.p
  }
}
