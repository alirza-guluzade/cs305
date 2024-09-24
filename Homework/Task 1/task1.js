// Programming Task 1
// Student : Alirza Guluzade   Class : CS305

// Data types : 
// 1. create a string , number , boolean , undefined , null , symbol , and biginit variable .
// 2. print each variable type using typeof.

let x = "Code academy "
console.log(typeof x)   //String

let y = 56
console.log(typeof y)   // Number

let z = true
console.log(typeof z)  // Boolean

let user;
console.log(typeof user); //Undefined

let c = null 
console.log(typeof c) //object

let b = Symbol("Alirza")
console.log(typeof b)  // symbol

let a = 122222222234333422n
console.log(typeof a) //biginit

// Keywords :
// 3.use let,const, and var to declare variables and explain  their differences with examples.

var p = 5
var k = 7
var l = p + k


let user1 = 'alirzatg'
let user2 = '_sabirtg'
let user3= user1+ user2

const r = 5
const t = 60
const g = r +t

// backticks (template literials) :
// 4. use backticks to create a dynamic message that includes (firstname,lastname,age,country,hobby,occupation) variables.

const firstname = 'Alirza'
const lastname = 'Guluzade'
let age = 18
let country = 'Azerbaijan'
let hobby = 'football'
let occupation = 'Cyber Security specialist'

console.log(`My fullname is ${firstname} ${lastname}.I am ${age} years old and I am from ${country}.My hobby is ${hobby}. My job is ${occupation}`)

//operators :
// 5. Use arithmetic operators (+ , - , * , /, %).
// 6. Use comparison operators (== , ===, > , < , etc.)
// 7. use logıcal operators (&& , | | , !)

console.log("1" + 1 + 9 ) // + operator
console.log(1+4)
console.log(4+7+'1'+ 2)

console.log(5-3) // - operator
console.log(10 / 5) // / operator
console.log(10 * 5) // * operator
console.log(20%9) // % operator


let a1= 3
let a2= "3"
let a3 = 4

console.log(a1 == a2)
console.log(a1 === a2)
console.log(a1 != a2 )
console.log (a1 !== a2 )

console.log(a1 == a3)
console.log(a1 === a3)
console.log(a1 != a3 )
console.log (a1 !== a3 )

console.log(a3 == a2)
console.log(a3 === a2)
console.log(a3 != a2 )
console.log (a3 !== a2 )

//// //// //// ///// ////// ////////////////////////////////////////////////////////////////////////////////////////////////////////

let agee = 20
let email = "alirzatg@code.edu.az"

if (agee > 20 &&  agee === 20 ) {
    console.log("Siz komandaya daxil ola bilersiz.")
} else {
    console.log('Siz komandaya qebol olmadiniz')
}



if (email === "alirzatg@code.edu.en"  ||  email === "alirzatg@code.edu.ru" ) {
    console.log("Siz komandaya daxil ola bilersiz.")
} else {
    console.log('Siz komandaya qebol olmadiniz')
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






