const numbers:{[num:number]:string} = {1: "I", 10: "X", 5: "V", 50: "L", 100: "C", 500: "D", 1000: "M"}

export const toRoman = (num:number):string => {
  var roman:string = ""
  var rem:number = num
  if (rem/1000 >= 1){
    roman += "M".repeat(Math.floor(rem/1000))
    rem = rem-(1000*(Math.floor(rem/1000)))
  }
  if (rem >= 500){
    if (rem >= 900){
      roman += "CM"
      rem -= 900
    } else {
      roman += "D"
      rem -= 500
    }
  }
  if (rem >= 100){
    if (rem >= 400){
      roman += "CD"
      rem -= 400
    } else {
      roman += "C".repeat(Math.floor(rem/100))
      rem = rem-(100*(Math.floor(rem/100)))
    }
  }
  if (rem >= 50){
    if (rem >= 90){
      roman += "XC"
      rem -= 90
    } else {
      roman += "L"
      rem -= 50
    }
  }
  if (rem >= 10){
    if (rem >= 40){
      roman += "XL"
      rem -= 40
    } else {
      roman += "X".repeat(Math.floor(rem/10))
      rem = rem-(10*(Math.floor(rem/10)))
    }
  }
  if (rem >= 5){
    if (rem >=9 ){
      roman += "IX"
      rem -= 9
    } else {
      roman += "V"
      rem -= 5
    }
  }
  if (rem >= 1){
    if (rem >= 4){
      roman += "IV"
      rem -= 4
    } else {
      roman += "I".repeat(rem/1)
      rem = 0
    }
  }
  return roman
}
