const dict:{ [key: string]: number } = {"black": 0, "brown": 1, "red": 2, "orange": 3, "yellow": 4, "green": 5, "blue": 6, "violet": 7, "grey": 8, "white": 9}
export function decodedResistorValue(colours:Array<string>):string {
  var amount:string = parseInt(dict[colours[0]].toString() + dict[colours[1]].toString() + "0".repeat(dict[colours[2]])).toString()
  if (amount.endsWith("000000000")){
    amount = amount.slice(0, -9);
    amount += " gigaohms"
  } else if (amount.endsWith("000000")){
    amount = amount.slice(0, -6);
    amount += " megaohms"
  } else if (amount.endsWith("000")){
    amount = amount.slice(0, -3);
    amount += " kiloohms"
  } else {
    amount += " ohms"
  }
  return amount
}
