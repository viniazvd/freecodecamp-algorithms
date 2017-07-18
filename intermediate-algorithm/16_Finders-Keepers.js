// const array = [1, 2, 3, 4]
// const func = num =>  num % 2 === 0

const result = ( arr, fn ) => arr.filter( fn )[0]

console.log( result( [1, 2, 3, 4], num => num % 2 === 0 ) )








