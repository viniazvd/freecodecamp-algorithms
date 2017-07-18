const pairs = { A: 'T', T: 'A', C: 'G', G: 'C' }

const str = 'CGC'

const array = str.split('')

const dna = ( element ) => [ element, pairs[ element ] ]

const result = array.map( dna )

console.log( result )