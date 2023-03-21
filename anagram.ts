function sort_text(text:string) {
   return text.split('').sort().join('');
};

export class Anagram {
  public main_word!:string;
  constructor(input: string) {
    this.main_word = input.toLowerCase();
  }

  public matches(...potentials: string[]): string[] {
    var all_matches:string[] = [];
    potentials.forEach((word:string) => {
      if (this.main_word != word.toLowerCase() && sort_text(word.toLowerCase()) == sort_text(this.main_word)){
        all_matches.push(word)
      }
    });
    return all_matches
  }
}
