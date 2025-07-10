let str = "Coding Factory"
//spread operator
console.log(...str)


// parse
let s1 = str.substring(1, 5)  // odin
let s2 = str.slice(1, 5)      // odin
let s3 = str.slice(-5)        // ctory
console.log(s3)


// split
let tokens = str.split(/\s+/)   // RegEx  ['Coding', 'Factory']
console.log(tokens)


// strings are char arrays
console.log(str.charAt(0))    // C
let index = str.indexOf('g')    // 5
if(index !== -1) {
  console.log(`Char found at position: ${index}`)
} else {
  console.log(`Not found: ${index}`)
}

let lastIndex = str.lastIndexOf('o')  // 11
console.log(lastIndex)


// Equality
let str1 = "Athens"
let str2 = "Athens"

if (str1 === str2) {
  console.log("Equal")
} else {
  console.log("Not Equal")
}


// case insensitive
let str3 = "Athens"
let str4 = "ATHENS"

if (str3.toUpperCase === str4.toUpperCase) {
  console.log("Equal")
} else {
  console.log("Not Equal")
}


// trim
let str5 = "    Athens   "
let trimmed = str5.trim()
console.log(trimmed)


// concat me + ή/και .concat() και space (" ")
let concatenated = str1 + " " + str2 + " " + str3
let concatenated2 = str1.concat(" ", str2, " ").concat(str3)
console.log(concatenated)
console.log(concatenated2)


// RegEx

// Validation
let inputStr = "hello all"
if(/hello/.test(inputStr)) {
  console.log("Match found")
}  else {
  console.log("Not match found")
}

let inputStr1 = "Hello all"
if(/hello/i.test(inputStr1)) {   // regex.test() i is ignore case
  console.log("Match found")
}  else {
  console.log("Not match found")
}

// g is global flag ελέγχει όλο το string για matches
// και η matches επιστρέφει όλα τα matches σε πίνακα
let manyTokens = "world watch hello"
const regex = /w\w+/g       
let matches = manyTokens.match(regex) // ['world', 'watch']
console.log(matches)

// η exec επιστρέφει ένα ένα τα matches
let match
while( (match = regex.exec(manyTokens)) !== null ) {
  console.log(`Found '${match}' at index ${match.index} `)
} 


function isStrongPassword(password) {
  return /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[\W_])^.{8,}$/.test(password)
}
