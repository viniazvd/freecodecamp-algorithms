const array = [4, 1]

const min = Math.min(array[0], array[1])
const max = Math.max(array[0], array[1])

var rangeArray = []

for ( var i = min; i <= max; i++ ) {
  rangeArray.push( i )
}

const sum = ( acc, num ) => {
  return acc + num
}

const result = rangeArray.reduce( sum )
console.log( result )



















