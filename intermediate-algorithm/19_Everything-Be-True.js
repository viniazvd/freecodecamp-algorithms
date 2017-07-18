const collection = [
  {
    "user": "Tinky-Winky", 
    "sex": "male"
  },
  {
    "user": "Dipsy", 
    "sex": "male"
  }, 
  {
    "user": "Laa-Laa", 
    "sex": "female"
  }, 
  {
    "user": "Po", 
    "sex": "female"
  }
]

const property = 'sex'

const truthCheck = ( obj ) => obj[ property ] 

const result = collection.every( truthCheck )

console.log( result )







