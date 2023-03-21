export function proverb(...proverbs:string[]):string {
  var proverb_string:string = ""
  for (let i=0;i<proverbs.length-1;i++){
    proverb_string += `For want of a ${proverbs[i]} the ${proverbs[i+1]} was lost.\n`
  }
  proverb_string += `And all for the want of a ${proverbs[0]}.`
  return proverb_string
}
