const array1 = [1, 2, 3, 5]
const array2 = [1, 2, 3, 4, 5]

const array = array1.concat( array2 )  // 1, 2, 3, 5, 1, 2, 3, 4, 5

const isRepeat = (num, index, arr) => {
  if( arr.slice(index + 1).indexOf( num ) === -1 && arr.slice(0, index).indexOf( num ) === -1 ) {
    return num
  }
}

const result = array.filter( isRepeat )

console.log( result )

















