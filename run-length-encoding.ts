export function encode(text: string): string {
  const arr: string[] = [...text];
  let result: string = '';
  let count: number = 1;
  for (let i = 1; i <= arr.length; i++) {
    if(arr[i-1] === arr[i]) {
      count++;
    } else if(count > 1) {
      result = result + count + arr[i-1];
      count = 1;
    } else {
      result += arr[i-1];
    }
  }
  return result;
}

export function decode(text: string): string {
  const arr: string[] = text.split(/(\d*)([\D])/g).filter(str => str !== '');
  let result: string = '';
  let count: number = 0;
  for (let i = 0; i < arr.length; i++) {
    if(Number.parseInt(arr[i])) {
      count = Number.parseInt(arr[i]);
    } else if(count !== 0) {
      result += arr[i].repeat(count);
      count = 0;
    } else {
      result += arr[i];
    }
  }
  return result;
}
