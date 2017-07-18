const array = [ 1, 3 ]

const min = Math.min( array[0], array[1] )
const max = Math.max( array[0], array[1] )

let test = true
let smallestCommons = 0

while ( test ) {
  smallestCommons++

  for ( let i = min; i <= max; i++ ) {
    // console.log( smallestCommons, i, smallestCommons % i )
    if ( smallestCommons % i !== 0 ) {
      break
    } else if ( i === max ) {
      test = false
    }
  }
}

console.log( smallestCommons )



















