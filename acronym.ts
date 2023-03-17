export function parse(message: string): string {
  var acronym: string = ""
  let matches = message.match(/[A-Z]+[a-z]*|[a-z]+/g);
  if ( matches != null ){
    matches.forEach( (word:string, index:number) => {
      if ( word != "" ){
        acronym += word.split("")[0]
      }
    });
  }
  return acronym.toUpperCase()
}
