// let a = [1,3,4,5,6]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
// }


// a.forEach((value,index,arr)=> {
//    console.log(value, index, arr) 
// }); 

// for in loop
// let obj = {
//     a : 1,
//     b : 2,
//     c : 3,

// }
//  for (const key in obj) {
//     if (!Object.hasOwn(obj, key)) continue;
    
//     const element = obj[key];
//     console.log(key, element )
    
//  }


// FOR OF LOOP
 
let a = [1,3,4,5,56]

// element ki jagah iteration, object aur const wagaira kuch bhi print kar sakte hai 
for (const element of a) {
    console.log(element)
}