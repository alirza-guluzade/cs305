// // // There are two ways to create Array

// // // Object 
// // // Array
// // /////////////////////////////////////////////////////////////
// // const nums = [4, 5, 7 , 8, 10, 33,  0 , 56 , 1 , 2 , 76 , 9 , 6]


// // let sum = 0

// // for (let i = 0 ; i <nums.length ; i++) {
// //     sum += nums[i]
// // }
// // console.log(sum , 'sum')


// // /////////////////////////////////////////////
// // console.log(' ')
// // let mp = 1;

// // for (let i = 0 ; i <nums.length ; i++) {
// //     mp = mp * nums[i]
// // }
// // console.log(mp , 'mp')

// // /////////////////////////////////////////////
// // console.log(' ')
// // for (let i = 0 ; i <nums.length ; i++) {
// //     if ( nums [i] > 5 && nums [i] < 10){
// //            console.log(nums [i])
// //     }

// // }
// // //////////////////////////////////////////////
// // console.log(' ')
// // let sum2= 0

// // for (let i = 0 ; i <nums.length ; i++) {
// //     if (nums[i] % 2 === 0) {

// //         sum2 += nums[i]
// //     }
// // }
// // console.log(sum2 , 'sum.cut')

// // ///////////////////////////////////////////////////
// // console.log(' ')
// // let sum3= 0

// // for (let i = 0 ; i <nums.length ; i++) {
// //     if (nums[i] % 2 === 1) {

// //         sum3 += nums[i]
// //     }
// // }
// // console.log(sum3 , 'sum.tek')

// // ///////////////////////////////////////
 
// // console.log(' ')
// // let mp2 = 1;

// // for (let i = 0 ; i <nums.length ; i++) {
// // if (nums[i] % 2 === 1) {
// //     mp2 = mp2 * nums[i]
// // }
// // }
// // console.log(mp2 , 'mp.tek')
// // ////////////////////////////////////
// // console.log(' ')
// // let mp3 = 1;

// // for (let i = 0 ; i <nums.length ; i++) {
// // if (nums[i] % 2 === 0 && nums[i] !== 0) {
// //     mp3 = mp3 * nums[i]
// // }
// // }
// // console.log(mp3 , 'mp.cut')

// // //////////////////////////////////////////////////
// // console.log (" ")
// // for (let i = 0 ; i <nums.length ; i++) {
// // if (nums[i]) {
// //     console.log(nums[i])
// // }

// // }
// // ////////////////////////////////////////////////////



// //map filter sort  reverse findIndex slice ////////////



// const users = [
//     {
//         id : 1 ,
//         user : 'Alirza' ,
//         gender : 'Male' ,
//         age : 19 
//     } ,
//     { 
//         id : 2 ,
//         user : 'Fatime' ,
//         gender : 'Female' ,
//         age : 18
        
//     },
//     {
//         id : 3 ,
//         user : 'Fidan' ,
//         gender : 'Female' ,
//         age : 20

//     },
//     {
//         id : 4 ,
//         user : 'Sabir' ,
//         gender : 'Male' ,
//         age : 33
//     },
//     {
//         id : 5 ,
//         user : 'Polad' ,
//         gender : 'Male' ,
//         age : 17
//     },
// ]  
// /////////////////////////////////////////////////////
// let sum = 0
// const result1 = users.map(item => sum += item.age)
// console.log(sum)
// console.log(' ')
// /////////////////////////////////////////////////////
// const result2 = users.filter(item => item.gender === 'Female')
// console.log(result2)
// /////////////////////////////////////////////////////
// const result3 = users.filter(item => item.age > 25)
// console.log(result3)
// ///////////////////////////////////////////////////////
// const result4 = users.map(item => item.age * 10)
// console.log(result4)
// ////////////////////////////////////////////////////




















