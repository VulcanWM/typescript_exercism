const all_nucl:string[] = ["A", "C", "G", "T"]
export function nucleotideCounts(nucl_string:string):{[name:string]:number} {
  var counted:{[name:string]:number} = {"A": 0, "C": 0, "G": 0, "T": 0};
  for (let i=0;i<nucl_string.split("").length;i++){
    let nucl = nucl_string.split("")[i]
    if (all_nucl.includes(nucl) == false){
      throw new Error("Invalid nucleotide in strand")
    }
    counted[nucl]++
  }
  return counted
}
