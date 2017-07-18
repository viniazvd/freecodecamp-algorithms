const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const chunk = 4

var newArray = []
var counter = 0

while ( counter < array.length ) {
  newArray.push( array.slice( counter, counter+chunk ) )
  counter += chunk
}

console.log(newArray)