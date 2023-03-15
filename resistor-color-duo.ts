const dict: { [name: string]: number } = {"black": 0, "brown": 1, "red": 2, "orange": 3, "yellow": 4, "green": 5, "blue": 6, "violet": 7, "grey": 8, "white": 9}
export function resistorNumber(colours:Array<string>):number {
  return parseInt(dict[colours[0]].toString() + dict[colours[1]].toString())
}
