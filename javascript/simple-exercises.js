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