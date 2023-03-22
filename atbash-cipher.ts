const alphabet:string = "abcdefghijklmnopqrstuvwxyz"
const numbers:string = "0123456789"

export function encode(plainText: string): string {
  plainText = plainText.toLowerCase();
  var cipher:string = ""
  plainText.split("").forEach((char) => {
    if (cipher.split("").length != 0 && cipher.replace(/ /g, '').split("").length % 5 == 0 && cipher.substr(cipher.length - 1) != " "){
      cipher += " "
    }
    if (numbers.split("").includes(char)){
      cipher += char
    } else if (alphabet.split("").includes(char)){
      cipher += alphabet.charAt(25-alphabet.split("").indexOf(char))
    }
  });
  return cipher
}

export function decode(cipherText: string): string {
  cipherText = cipherText.toLowerCase();
  var plain:string = ""
  cipherText.split("").forEach((char) => {
    if (numbers.split("").includes(char)){
      plain += char
    } else if (alphabet.split("").includes(char)){
      plain += alphabet.charAt(25-alphabet.split("").indexOf(char))
    }
  });
  return plain
}
