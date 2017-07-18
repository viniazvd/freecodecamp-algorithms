const array = [
  { 
    first: "Romeo", 
    last: "Montague" 
  }, 
  { 
    first: "Mercutio", 
    last: null
  }, 
  {
    first: "Tybalt", 
    last: "Capulet" 
  }
]

const target = { last: "Capulet" }

const contains = (obj) => {
  if ( obj.last === target.last ) console.log( [ obj ] )
}

const result = array.filter( contains )