const str = 'SERR PBQR PNZC'

const decode = letter => {
  letter = letter.charCodeAt()

  if ( letter >= 65 && letter <= 77 ) {
    letter += 13
  } else if ( letter >= 78 && letter <= 90 ) {
    letter -= 13
  }
  return String.fromCharCode( letter )
}

const result = str.split('').map( decode ).join('')
console.log( result )


















