const array1 = [1, 3, 2]
const array2 = [5, 2, 1, 4]
const array3 = [2, 1]

const array = array1.concat( array2 ).concat( array3 )
// [ 1, 3, 2, 5, 2, 1, 4, 2, 1 ]

const uniqueArray = ( x ) => [ ...new Set( x ) ]
console.log(uniqueArray(array))