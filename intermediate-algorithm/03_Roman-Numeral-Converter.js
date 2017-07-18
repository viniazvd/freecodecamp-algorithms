let num = 36

const numsRoman = {
  C: 100, 
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
}

let converted = ''

const keys = x => Object.keys( x )

const convertToRoman = ( value ) => {
  if ( num >= numsRoman[value] ) {
    converted += value.repeat( Math.trunc( num / numsRoman[value] ) )
    num -= numsRoman[value] * Math.trunc( num / numsRoman[value] )
  }
}

const result = keys( numsRoman ).map( convertToRoman )

console.log(converted)








