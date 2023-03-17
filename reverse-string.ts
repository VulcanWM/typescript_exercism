export function reverse(message:string):string {
  var message_arr:string[] = message.split("")
  message_arr = message_arr.reverse()
  let reversed:string = message_arr.join("")
  return reversed
}
