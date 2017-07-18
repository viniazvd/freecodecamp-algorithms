const array = [1, 2, 3, 1, 2, 3]
const target = [2, 3]

const destroy = x => !target.includes( x ) 

const result = array.filter( destroy )

console.log( result )



















