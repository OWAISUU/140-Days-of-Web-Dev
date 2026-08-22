// agar new array push karn ho to aise karenge aur iska doosra method bhi hai jo ki map() hai wo iske niche hai 

// arr = [1,2,4,6,6,7,13]

// newArr= []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)   
// }

// console.log(newArr)

// map method se element , index aur array teeno chiz print kar sakte hai

let arr = [2,3,5,6,7,18]
// let newArr = arr.map((e, index ,array)=>{
//     return e**3
// })
// console.log(newArr)


// filter ka use niche diya gaya hai
const greaterthanthree = (e)=> {
    if (e>3) {
        return true

    }
    return false
}

console.log(arr.filter(greaterthanthree))

// reduce metod ka use

let arr2 = [1,2,3,4,5 ]

const red = (a,b) => {
    return a+b

}

console.log(arr2.reduce(red))