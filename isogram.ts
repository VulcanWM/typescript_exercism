export function isIsogram(word:string): boolean {
  word = word.toLowerCase();
  word = word.replace(/[^0-9a-z]/gi, '')
  return new Set(word.split("")).size == word.split("").length
}
