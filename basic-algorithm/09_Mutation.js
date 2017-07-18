const array = [ 'hello', 'hey' ]

const word = array[0]
const target = array[1]

var counter = 0

for ( var i = 0; i < target.length; i++ ) {
  if ( target[i].indexOf(word[i]) !== -1 ) {
      counter++
    }
}

console.log(counter)





// for ( var i = 0; i < target.length; i++ ) {
//   for ( var j = 0; j < word.length; j++ ) {
//     if ( target[i].indexOf(word[j]) !== -1 ) {
//       counter++
//     }
//   }
// }
















