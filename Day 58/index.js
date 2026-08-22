// function name(change) {
//   //  ye jo  change h yehi function me jo daloge wohi hoga
//   console.log("hey " + change + " you are nice");
//   console.log("hey " + change + " you are bad");
//   console.log("hey " + change + " your pc is good");
//   console.log("hey "+change+" you are a software developer");
// }
// name    ("walter white")
// humara name hoga jo ki curly bracket ke andar print karna hoga aur change ki jagah par change hoga wohi jo niche walter white ki jagah likha hoga

// function sum(a,b) {
//    console.log(a+b)

// }
// sum(1,23)

// agar kuch likha hua chaiye ya like result wala sum chahiye to niche dehko

// function sum(a,b) {
//   // agar console wali line likhoge to statement nahi milegi to yaha par return likhna hoga
//   console.log(a+b)
// return a+b

// }

// result = sum(3,9)

// console.log("the sum of these numbers is:",result)
// console.log(a+b+c)

function math(a, b, c = 10) {
  return a + b + c;
}

result1 = math(15, 19);
result2 = math(1, 129);
result3 = math(23, 12);

console.log("the result of these numbers is:", result1);
console.log("the result of these numbers is:", result2);
console.log("the result of these numbers is:", result3);

// function ko variable ke andar use karne ka tarika
  const func1 =(x)=>{
    console.log("i am an arrow function", x)
  }

  func1(23);
  func1(63);
  func1(26);