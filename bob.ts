export function hey(message: string): string {
  message = message.trim()
  if (message == null || message.replace(" ", "") == ""){
    return "Fine. Be that way!"
  } else if (message.endsWith("?")){
    if (message == message.toUpperCase() && /[a-zA-Z]/g.test(message)){
      return "Calm down, I know what I'm doing!"
    } else {
      return "Sure."
    }
  } else if (message == message.toUpperCase() && /[a-zA-Z]/g.test(message)){
    return "Whoa, chill out!"
  } else {
    return "Whatever."
  }
}
