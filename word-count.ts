function countInstances(string:string, word:string) {
   return string.split(word).length - 1;
}

export function count(message:string):Map<string, number> {
  message = message.toLowerCase()
  var count_dict: {[word:string]:number} = {}
  let regexp = /(?:[a-zA-Z]+\'[a-zA-Z]+|[a-zA-Z?]+|\d)/gm ;
  let matches = message.toLowerCase().match(regexp);
  if ( matches != null ){
    matches.forEach( (word:string, index:number) => {
      if ( word != "" ){
        if (Object.keys(count_dict).includes(word)){
          count_dict[word] += 1
        } else {
          count_dict[word] = 1
        }
      }
    });
  }
  return new Map(Object.entries(count_dict))
}
