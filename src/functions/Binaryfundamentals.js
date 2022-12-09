
class Binaryfundamentals {
  constructor() {

  }
  toBinary(decValue) {

    // console.log(decValue)
    let temp = decValue
    let bin = ''
    while (temp != 0) {
      bin = (temp % 2) + bin
      temp = parseInt(temp / 2)
    }
    // console.log(bin)
    return bin
  }
  fractionBinary(fraction) {
    let fivenFraction = fraction
    let fracBin = ''
    for (let i = 0; i < 70; i++) {
      let temp = parseFloat(fivenFraction) * 2
      let strTemp = temp.toString()
      fracBin += strTemp[0]
      fivenFraction = '0' + strTemp.substring(1)
    }
    // console.log(fracBin)
    return fracBin
  }
  binaryAddition(value1, value2) {
    let carry = '0'
    let sum = ''
    for (let index = value1.length - 1; index >= 0; index--) {
      // console.log(value1[index])
      if (value1[index] == '1') {
        if (value2[index] == '1') {
          if (carry == '1') {
            sum = '1' + sum
          }
          else {
            sum = '0' + sum
          }
          carry = '1'
        }
        else {
          if (carry == '1') {
            sum = '0' + sum
            carry = '1'
          }
          else {
            sum = '1' + sum
            carry = '0'
          }
        }
      }
      else {
        if (value2[index] == '1') {
          if (carry == '1') {
            sum = '0' + sum
            carry = '1'
          }
          else {
            sum = '1' + sum
            carry = '0'
          }
        }
        else {
          if (carry == '1') {
            sum = '1' + sum
          }
          else {
            sum = '0' + sum
          }
          carry = '0'
        }
      }
    }
    if (carry == '1') {
      sum = carry + sum
    }
    return sum
  }

}

export default Binaryfundamentals