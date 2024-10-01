// // // // // // // // // // //
//     Programming Task 2     //
// Student : Alirza Guluzade  //
// // // // // // // // // // //

// ###### Task 1 ######
// 1.Multiply 12 with 8, and console the result:

const a = 12 ;
const b = 8  ;
const c = a * b 

console.log(c)

///////////////////

console.log(12 * 8)

// 2.Divide 10 by 2 add result to variables x, and console x:


let h = 10
let p = 2
let x = h / p

console.log(x)

/* 

let x = 10 / 2
console.log(x)

*/

// 3.Create two variables called num1 and num2, assign the value 20 to num1 and value 17 to num2 then addition(+) them in console.


const num1 = 20
const num2 = 17
console.log(num1 + num2)

/*
4.Create variables called name, surname and year assign values to them ('your name', 'your surname', ' your birth of year'),
then add them to varibale name (info) and console info. 
*/
  

let name = 'Alirza'
let surname = 'Guluzade'
let year = 2006

let info = name + '  ' + surname + '  ' + year

console.log(info)

// 5.Console the remainder(%) when 17 is divided by 12.


var y = 17 % 12
console.log(y);

/*
6.Create a varibale called "city name" (camelCase). Assign value Jalilabad, then call variable again
and reassign value Baku, console result.
*/

let cityName ;

cityName = ' Jalilabad'

cityName = 'Baku '

console.log(cityName)











// ###### Task 2 ######

// console.log('test1', test); // result 1 = test is not defined. 

//{let test = "something"
//console.log('test2', test); }

//console.log('test3', test);  // result 3


//console.log('test1', test);  // ?
// {
//     var test = "something"
//     console.log('test2', test); // ?
// }
// console.log('test3', test); // ?













// ###### Task 3 ######

//Find the type of all the following cases

let names = "Ulfat"
//let surnames = Zakirli 
let years = 2000
years = "2000"
let city;
let qualification = null
let obj = { name: 'ulfat' }
let arr = ['a', 'b', 'c']

console.log('names' , typeof names);
console.log('surnames' ,typeof surnames); // Zakirli is not defined. becasue we don't create variable called Zakirli.
console.log('years',typeof years);
console.log('city',typeof city);
console.log('qualification' ,typeof qualification);
console.log('obj' ,typeof obj);
console.log('arr' ,typeof arr);













// ###### Task 4 ######

const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8];

// 1.Sum all the numbers in 'arr1'


let sum = 0
for (let i = 0 ; i < arr1.length ; i ++) {
    sum += arr1 [i]
}
console.log(sum)


// 2.Add two numbers (10,88) to end of arr1 (push methods)


arr1.push(10 ,88)
console.log(arr1)


// 3.Remove first two numbers from arr1
arr1.splice(0,2)
console.log(arr1)

// 4.Add three numbers (0,9,11) in front of arr1(unshift)

arr1.unshift (0,9,11)
console.log (arr1)

// 5.Remove four numbers in front of arr1(shift)

arr1.shift()
arr1.shift()
arr1.shift()
arr1.shift()

console.log(arr1)













// ###### Task 5 ######
////////////////////////////////////////////////////////////////////////////
// 1.Create a object add name, surname, age and address.
// 2.Then change name to "Jhon"

const targets = {
    namee : 'Raven',
    surnamee : 'Darkwood' ,
    age : 40 ,
    adreess : {
        city : 'Los Angeles' ,
        country : 'USA',
        address : '1234 Elm street ,Springfield ,IL 62701 ,USA'
    }



}

console.log('before' ,targets)
targets.namee = 'Jhon'
targets.surnamee = 'Doe'
console.log('after' ,targets)
/////////////////////////////////////////////////////////////////////////////////////








const user = {
    email: "ulfat@gmail.com",
    info: {
        gender: "Male",
        loc: {
            city: "Baku",
            street: "Nizami 22",
            education: {
                "uni name": "ADNSU",
            },
        },
    },
};

// 3.console each value of user object
// 4.Console only keys of user
// 5.Console only values of user
















////////////////////////////////////////////////////////
const mixedObject = {
    name: "ulfat",
    age: 25,
    isStudent: false,
    hobbies: null,
    year: 2024,
    address: undefined,
    surname: "Zakirli",
    contactInfo: {
        email: "ulfat@example.com",
        phone: null,
    },
    scores: [98, 87, 92],
};

// 6.Log only the 'keys' whose values are of type string
// 7.Log only the 'keys' whose values are of type number
// 8.Log only the 'keys' whose values are of type boolean
// 9.Log only the 'keys' whose values are of type undefined
// 10.Log only the 'keys' whose values are of type object

// 11.Repeat (6,7,8,9,10) tasks but now log 'values'

// let, const are block scope
// var is global scope

// {
//     const num = 9;
//     console.log("num", num);
// }


// const a = 9;
// a = 9
// a = 9
// a = 1
// console.log('a', a)
// a = 9
// a = 19


// {
//     let a = 7
//     console.log('inner', a);
// }

// console.log('outer', a);















