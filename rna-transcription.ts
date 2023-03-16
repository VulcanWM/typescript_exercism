const replace_dict: {[name: string]: string} = {"A": "U", "T": "A", "C": "G", "G": "C"}

export function toRna(dna:string):string {
  var rna: string = ""
  for (var i = 0; i < dna.length; i++) {
    if (Object.keys(replace_dict).includes(dna[i])){
      rna += replace_dict[dna[i]]
    } else {
      throw new Error('Invalid input DNA.');
    }
  }
  return rna
}
