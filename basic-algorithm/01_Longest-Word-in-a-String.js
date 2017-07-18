function findLongestWord(str) {
  
  const array = str.split(' ')

  const strCount = x => x.length

  const strLength = array.map( strCount )

  const result = strLength.reduce( function( acc, num, i, array ) {

    if ( acc === 0 ) acc = num

    if( acc < array[i] ) acc = array[i]

    return acc
  }, 0 )

  return result
}


findLongestWord("The quick brown fox jumped over the lazy dog");