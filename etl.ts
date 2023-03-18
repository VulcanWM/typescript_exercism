export function transform(old:{[key: string]: string[]}):{[key: string]: number} {
  var new_dict:{[key: string]: number} = {};
  for (let i=0;i<Object.keys(old).length;i++){
    let point = Object.keys(old)[i]
    old[Object.keys(old)[i]].forEach((letter, index) => {
      new_dict[letter.toLowerCase()] = parseInt(point);
    });
  }
  return new_dict
}
