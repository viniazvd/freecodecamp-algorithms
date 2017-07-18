const str = 'Dolce & Gabbana'

const characters = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '\"': '&quot;',
  '\'': '&apos;'
}

const convert = (char) => {
  var newStr = []
  if ( characters[char] ) {
    newStr.push(characters[char])
  } else {
    newStr.push(char)
  }
  return newStr
}

const concat = (acc, item) => acc.concat(item)

const result = str.split( '' ).map( convert ).reduce( concat ).join( '' )

console.log( result )






