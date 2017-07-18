// const num = 10 
// 1 1 2 3 5 8

const odd = num => num % 2 === 1

const sum = ( acc, value ) => ( acc + value ) 

const result = ( x ) => {
  let array = fib( x )

  return array.filter( odd ).reduce( sum ) 
}

const fib = ( x ) => {
  if ( x === 0 ) return 0
  if ( x === 1 ) return [ 1, 1 ]

  let sequence = [ 1, 1 ]

  while ( true ) {
    let next = sequence[ sequence.length - 1 ] + sequence[ sequence.length - 2 ]

    if ( next <= x ) {
      sequence.push( next )
    } else {
      return sequence
    }
  }
  // return fib( x - 2 ) + fib( x -1 ) 
}


console.log( result( 1 ) ) 

  // let sum = 0

  // for ( let i = 0; i < array.length; i++ ) {
  //   if ( array[ i ] % 2 === 1 ) {
  //     sum += array[ i ]
  //   }
  // }
  // return sum




 




