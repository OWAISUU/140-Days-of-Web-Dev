console.log("owais")

let a = "owais"

console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
// ginti 0 se shuru hoti hai js me isliye yaha pe 5th number par undefined dikha rha hai
// console.log(a[5])

console.log(a.length)

let real_name = "owais"
let height = "6ft"

console.log("my name is " + real_name + " and my height is " + height + " ")
// template laterals concepts
// isme humlog strings ko $ dollar sign ke andar lagate hai wo bhi backtick ke sath
console.log(`my name is ${real_name} and my height is ${height} `)

let b = "walter white"

console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
console.log(b.slice(1,8))
console.log(b.slice(4))

console.log(b.replace("walter", "owais"))
console.log(b.concat(a),"and many more")