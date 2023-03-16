const letters:Array<string> = ("abcdefghijklmnopqrstuvwxyz".split(""))

export function isPangram(message:string):boolean {
  var bools:Array<boolean> = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
  message = message.toLowerCase()
  message.split("").forEach(function (letter:string, index) {
    if (letters.includes(letter)){
      bools[letters.indexOf(letter)] = true
    }
  });
  if (bools.includes(false)){
    return false
  } else {
    return true
  }
}
