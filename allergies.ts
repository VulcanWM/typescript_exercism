const scores: {[score:number]: string} = {1: "eggs", 2: "peanuts", 4: "shellfish", 8: "strawberries", 16: "tomatoes", 32: "chocolate", 64: "pollen", 128: "cats"}

export class Allergies {
  public score!:number;
  public allergens!:string[];
  constructor(allergenIndex: number) {
    this.score = allergenIndex
    var allergens:string[] = []
    let bin:string = allergenIndex.toString(2)
    let bin_reverse:string[] = bin.split("").reverse()
    bin_reverse.forEach(function(value:string, index:number) {
      let key:number = 2**index
      if (bin_reverse[index] == "1"){
        if (scores[key] != null){
          allergens.push(scores[key])
        }
      }
    });
    this.allergens = allergens
  }

  public list(): string[] {
    return this.allergens
  }

  public allergicTo(allergen: string): boolean {
    return this.allergens.includes(allergen)
  }
}
