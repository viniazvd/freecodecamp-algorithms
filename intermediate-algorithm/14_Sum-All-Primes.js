const num = 10

const isPrime = ( x ) => {
  for ( let j = 2; j < x; j++ ) {
    if ( x % j === 0 ) return false
  }
  return true
}

const sumPrimes = (acc, value) => acc + value

const primes = ( x ) => {
  let array = [] 

  for ( let i = 2; i <= x; i++) {    
    if ( isPrime( i ) ) array.push( i )
  } 
  return array.reduce( sumPrimes )
}


console.log(primes(num))
