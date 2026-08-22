let random = Math.random();
console.log(random)

let a = prompt("enter your first number")
let c = prompt("enter your  operation") 
let b = prompt("enter your second number") 
let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if (random>0.1) {
      console.log(`The result is ${a} ${c} ${b}`)
          alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
} 
else {
     c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}