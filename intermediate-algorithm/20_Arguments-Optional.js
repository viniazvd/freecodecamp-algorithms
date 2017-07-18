const nums = [ 2, 3 ]

const isNumber = ( x ) => typeof x === 'number' ? x : undefined

const firstN = isNumber( nums[0] )
const secondN = isNumber( nums[1] )

const result = ( x ) => ( y ) => {
  if ( x !== undefined && y !== undefined ) {
    return x + y
  } else {
    return undefined
  }
}

console.log( result( firstN )( secondN ) )











