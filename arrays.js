// Δηλώσεις

const arr1 = []
const arr = [1,2,3,4,5]
const arr3 = new Array(5).fill(0) [0, 0, 0, 0, 0]


const arr2 = [...arr]                   // spread operator gives a shallow copy
console.log(arr)
console.log(arr2)


// Array Methods

console.log(arr2[0])    // 1
console.log(arr2.length)    // 5
console.log(arr2[arr2.length-1])  // 5

// Joins an array with a delimeter and returns a string
console.log(arr2.join(","))     // επιστρέφει string

// Traverse
//Classic for
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i])
}

// Enhanced for with for .. of
for (let item of arr2)
    console.log(item)

// Functional
arr2.forEach((value, index) => {
    console.log(`Value: ${value}, index: ${index}`)
})

// Stack-like Operations - LIFO 
arr.push(12)
let popped = arr.pop()

// Queue-like Operations - FIFO
arr.shift()     // returns the first el

// Add to first position
arr.unshift(5)


// Splice delete, insert, update
arr.splice(2, 1)        // index 2, removes 1 elements

arr.splice(2, 0, 3)     // insert 3 at index 2

arr.splice(2, 2, 1, 5)  // at index 2 removes 2 el, and inserts 1 & 5, updating the array


let spliced = arr.slice().splice(2, 1)      // returns new array

console.log(spliced)

// Array includes
if (arr2.includes(3)) {
    console.log('3 included')
} else {
    console.log('not included')
}





