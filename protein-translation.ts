const codons: {[code: string]: string} = {"AUG": "Methionine", "UUU": "Phenylalanine", "UUC": "Phenylalanine", "UUA": "Leucine", "UUG": "Leucine", "UCU": "Serine", "UCC": "Serine", "UCA": "Serine", "UCG": "Serine", "UAU": "Tyrosine", "UAC": "Tyrosine", "UGU": "Cysteine", "UGC": "Cysteine", "UGG": "Tryptophan", "UAA": "STOP", "UAG": "STOP", "UGA": "STOP"}

export function translate(rna:string):string[] {
  var amino_acids:string[] = []
  for (let i=1;i<((rna.split("").length/3)+1);i++){
    let code = rna.charAt(i*3-3) + rna.charAt(i*3-2) + rna.charAt(i*3-1)
    if (Object.keys(codons).includes(code) == false){
      throw new Error("Invalid codon")
    }
    if (codons[code] == "STOP"){
      break
    }
    amino_acids.push(codons[code])
  }
  return amino_acids
}
