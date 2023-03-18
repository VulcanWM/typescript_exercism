const scores: {[letter: string]: number} = {"d": 2, "g": 2, "b": 3, "c": 3, "m": 3, "p": 3, "f": 4, "h": 4, "v": 4, "w": 4, "y": 4, "k": 5, "j": 8, "x": 8, "q": 10, "z": 10}

export function score(word:string):number {
  if (word == null){
    return 0
  } else {
    word = word.toLowerCase();
    var score:number = 0
    for (let i=0;i<word.split("").length;i++){
      if (Object.keys(scores).includes(word.charAt(i))){
        score += scores[word.charAt(i)]
      } else {
        score ++
      }
    }
    return score
  }
}
