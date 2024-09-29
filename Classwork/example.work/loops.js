// let text = 'Code academy CS305'
// let city = 'Baku'
//let contury = 'Azerbaijan'


//1

// for (let i = 0; i < text.length; i++) {
    
//     console.log(text[i])
// }




//2
// let concat_method = contury.concat(' ' , city)
// console.log(concat_method)



//3 //4
// console.log(text.split(''))
// console.log(text.split(' '))




//5
//let result = contury.indexOf('a',8)
// console.log(result)




//6
// let result = contury.lastIndexOf('a')
// console.log(result)





//7
// for (a of contury) {
//     console.log(a);
// }





//8
// if ( text.includes('CS')) {
//     console.log('success')
// } else {
//     console.log('fail')
// }






//9
 
// for (let i= 0; i< 20 ; i++) {
//     console.log(i)
    
    





let user = ['alirza' , 'azer', 'bayram' , 'cemile' , 'ziver' , 'aydan' , 'behruz' , 'afaq']
let CS305 = ' '
let EL305 = ' '
for (let i = 0; i< user.length; i++ ) {
   let indexx = user[i]
   if (indexx[0] === 'a'){
     CS305 +=    indexx + ' ,'
   }else {
     EL305 += indexx + ' ,'
    
    }

} 
console.log('CS305 -' , CS305)
console.log ('EL305 -', EL305)


 
       

    