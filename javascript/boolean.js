let inputName = 'bob'
let username = inputName || 'default user'

console.log(username) // bob

let apiURL = "https://api.aueb.gr"
const publicApiURL = apiURL && getFromURL(apiURL)

function getFromURL(url) {
  return 'something from URL' 
}

console.log(publicApiURL)   // something from url

let value = 0;
let result = value || 'default value'

console.log(result)  // default value