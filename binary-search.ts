export function find(haystack: number[] = [], needle: number, startIndex = 0, endIndex = haystack.length - 1): number | never {
  if (startIndex > endIndex) {
    throw new Error('Value not in array')
  }
  
  const pivot:number = Math.floor((startIndex + endIndex) / 2)
 
  if (needle === haystack[pivot]) {
    return pivot
  }
  
  const step = needle > haystack[pivot] ?
    { startIndex: pivot + 1, endIndex } :
    { startIndex, endIndex: pivot-1 }
  
  return find(haystack, needle, step.startIndex, step.endIndex)
}
