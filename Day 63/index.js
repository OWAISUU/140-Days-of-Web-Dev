// let arr = [1,5,76,2,3]

// array is mutable that means it can be changed after or in between anytime and anywhere 
// arr [3] = 100;
// console.log(arr)
// console.log(arr.length)
// console.log(arr[3],typeof arr)

// array ko string me convert karne ka tarika
// toString()
let arra = [2,5,57,19]
// join() use karne se , comma ki jagah and aajayega ya to jo bhi daloge wo aajayega
console.log(arra.join(" and "))
console.log(arra.toString())
// pop() ko use karne ka tarika ye hai ki ye last element bahar phek deta hai is case me ye 19 ko bahar phek dega liek pop out kar dega
console.log(arra.pop())
// basically ye owais array ke andar la to dega but dikhta nahi hai aur jo output me dikh rhah wo array ki length hai but agar wapas se array print karoge to dikhega
console.log(arra.push("owais"))
// delete wali array property us element ko del kar degi jiski posiition mention hogi
console.log(delete arra[2])
console.log(arra)
console.log(arra.sort())
// let a1 = [1,2,3,4]
// let a2 = [5,6,7]
// let a3 = [8,9,0]


// console.log(a1.concat(a2,a3))

let splice = [1,3,4,6,7]
// to splice karta ye hai ki ye array me se position ke hisab se us me se elements cutout karke nikal leta hai
console.log(splice.splice(1,3))