/** Exercice 1:  */

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

//1.Remove Banana from the array.
fruits.shift()

//Sort the array in alphabetical order.
fruits.sort()
//Add “Kiwi” to the end of the arra

fruits.push("Kiwi")
// console.log(fruits)

//Remove “Apples” from the array. Don’t use the same method as in part 1.
fruits.splice(0, 1)
console.log(fruits)

//Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])At the end you should see this outcome:
fruits.reverse()
console.log(fruits)



/** Exercice 2: */

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

//1. Access and then console.log “Oranges”.

console.log(moreFruits[1][1])
