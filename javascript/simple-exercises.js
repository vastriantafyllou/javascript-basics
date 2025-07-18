let userName = "Vasilis"
console.log("Hello,",`${userName}!`)

let num1 = 10
let num2 = 20
console.log(num1 + num2)

let isTrue = true
isTrue ? console.log("Είναι αλήθεια!") : console.log("Είναι ψευδές!")

let cities = ["Athens", "London", "Paris"]
cities.push("Berlin")
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i])
}

const user = {
    name: "Bill",
    age: 35,    
    city: "Athens",
    hello() {
    console.log(`Hello ${this.name}`)
 }
}
user.hello()

const circleArea = (r) => {
   return Math.PI * (r ** 2)
}

console.log(circleArea(5))

const arr = [1, 2, 3, 4, 5, 5, 3, 2, 6, 7, 9, 1]
const removeDuplicates = (arr) => {
    const uniqueItems = []

    for(let item of arr) {
        if(uniqueItems.indexOf(item) === -1) uniqueItems.push(item) 
    }
    return uniqueItems
}

console.log(removeDuplicates(arr))

const chunkArray = function(arr, size) {
      const chunks = []
      
      for(let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size))
      }
      return chunks
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(chunkArray(array, 2))


const arrayCommonEl = function(arr1, arr2) {
    let newCommonArray = []

   const mySet = new Set(arr1)

    for (let i = 0; i < arr2.length; i++)
     if (mySet.has(arr2[i])) {
        newCommonArray.push(arr2[i])
     }
    return [...new Set(newCommonArray)]
}
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const arr2 = [1, 2, 2, 4, 5, 6, 6, 8, 10]

console.log(arrayCommonEl(arr1, arr2))


 