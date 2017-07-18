const str = 'algorithm'  //algorithmway
// const str = 'california' //aliforniacay

const vowels = [ 'a', 'e', 'i', 'o', 'u' ]

const array = str.split('')

const result = []

for ( var i = 0; i < vowels.length; i++ ) {
  if( array[0].includes( vowels[ i ] ) ) {
    const sufix = 'way'
    const transform = str + sufix
    result.push( transform )
    break;    
  } else {
    const firstLetter = str.substr( 0, 1 )
    const withOutFirstLetter = array.slice( 1 )  
    const sufix = 'ay'
    const transform = withOutFirstLetter + firstLetter + sufix
    result.push( transform )
    break;        
  }
}

console.log( result.join('').split(',').join('') )









