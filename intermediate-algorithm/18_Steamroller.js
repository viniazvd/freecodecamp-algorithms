const array = [1, [2], [3, [[4]]]]

const streamRoller = ( acc, arr ) => {
    if ( Array.isArray(arr) ) { 
      return streamRoller( acc.concat( arr ) )
    } else {
      return acc.concat( arr )
    }
}

const result = array.reduce( streamRoller, [] )

console.log( result )






