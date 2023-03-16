export function commands(decimal:number):Array<string> {
  let binary:string = decimal.toString(2)
  var commands:Array<string> = []
  if (binary.charAt(binary.length-1) == "1"){
    commands.push("wink")
  }
  if (binary.charAt(binary.length-2) == "1"){
    commands.push("double blink")
  }
  if (binary.charAt(binary.length-3) == "1"){
    commands.push("close your eyes")
  }
  if (binary.charAt(binary.length-4) == "1"){
    commands.push("jump")
  }
  if (binary.charAt(binary.length-5) == "1"){
    commands = commands.reverse()
  }
  return commands
}
