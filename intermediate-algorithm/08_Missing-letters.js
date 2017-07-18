const str = 'abce' //97, 98, 99, 101

const array = str.split('')

const code = letter => letter.charCodeAt()

const codify = array.map( code )

for ( let i = 0; i < codify.length; i++  ) {
  if ( codify[ i + 1 ] - codify[ i ] > 1 ) {
    console.log( String.fromCharCode( codify[ i ] + 1 ) )
  }
}

