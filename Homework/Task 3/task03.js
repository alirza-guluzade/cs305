//Alirza Guluzade 
// Programming Task 03

////////////// TASK 1 - Start //////////////

const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]


// 1.Sum all the numbers in 'arr1'

let sum = 0
for (let i = 0 ; i < arr1.length ; i++) {
    sum += arr1[i]
}
console.log(sum)



const result0 = arr1.reduce((summ, itemm) => summ+= itemm , 0)
console.log(result0)



function sumMethods() { 
    const result1 = arr1.reduce((acc, item) => acc+= item , 0)
    return result1
    
}
console.log(sumMethods())


// 2.Add two numbers (10,88) to end of arr1 (push methods)


console.log('Without push' ,arr1)

arr1.push(10,88)

console.log('With push' , arr1)


// 3.Remove first two numbers from arr1


// console.log('Without shift' ,arr1)

// arr1.shift()
// arr1.shift()

// console.log('With shift' , arr1)


console.log('Without splice ' ,arr1)

arr1.splice(0,2)

console.log('With splice ',arr1)


// 4.Add three numbers (0,9,11) in front of arr1(unshift)

console.log('Without unshift ' ,arr1)

arr1.unshift(0,9,10)

console.log('With unshift ',arr1)

// 5.Remove four numbers in front of arr1(shift)

console.log('Without shift' ,arr1)

arr1.shift()
arr1.shift()
arr1.shift()
arr1.shift()

console.log('With shift' , arr1)

////////////// TASK 1 - The End //////////////
















////////////// TASK 2 - Start ////////////////

const arr0 = ["Sabir", "Fatime", "Rufet", 'Mehman', 'Fatime', 'Gunel',"Fatime", "Cavid", 'Ramin', "Ali", "Polad"]

//1.Console values from "Ali" to 'Rufet



////////////////////////////////////////////////////////////////
// const result1 = arr0.reverse().slice(1,9)
// console.log(result1)
// let netice = 0
///////////////////////////////////////////////////////////////////////////

// let y = arr0.reverse().findIndex((figur) => figur === 'Rufet' ) +1

// console.log(y);

// for (let i = 0; i <arr0.length ; i++ ) {
//     if (arr0[i] === 'Ali') {
//     let netice = arr0.slice(i,y)
//     console.log(netice)
     
//     }

//  }

////////////////////////////////////////////////////////////////////

//Console values from 'Rufet' to 'Ali'
a = arr0.findIndex((figur) => figur === 'Rufet')
b = arr0.findIndex((figur) => figur === 'Ali') +1
console.log(arr0.slice(a,b))
///////////////////////////////////////////////////
////////////////////////////////////////////////////





// 2.Change Mehman to Fidan

////////////////////////////////////////////////////////

console.log('before' , arr0)

arr0[arr0.findIndex(fiqur => fiqur ==='Mehman')] = 'Fidan'

console.log('then' , arr0 )

/////////////////////////////////////////////////

// const c = arr0.findIndex(fiqur => fiqur ==='Mehman')
// const d = arr0.slice(0,c)

// console.log(d)

// for (let i = 0 ; i < d.length ; i++) {
//     arr0.shift()
// }
////////////////////////////////////////////



// 3.Console each name with map

arr0.map((item) => console.log(item))

// 4.Console only names which is Fatime

for (let i = 0 ; i < arr0.length ; i++ ) {
    if  (arr0[i] === 'Fatime'  ) {
        console.log(arr0[i])
    }
}

// 5.Console all names where name is Gunel, then change it to "Nihad"


for (let i = 0 ; i < arr0.length ; i++ ) {
    if  (arr0[i] === 'Gunel'  ) {
        arr0[i] = 'Nihad'
        console.log(arr0[i])
    }else {
        console.log(arr0[i])
    }
} 

// 6.Console last second value of arr0

for (let i = 0 ; i < arr0.length ; i++ ) {
    if  (arr0 [i] === arr0[arr0.length - 1]|| arr0 [i] === arr0[arr0.length - 2]) {
    console.log(arr0[i])
    }
} 



const ressullt = arr0.reverse().slice(0,2)
console.log(ressullt)



// 7.Console length of arr0

console.log(arr0.length)

////////////// TASK 2 - The End //////////////















///////////// TASK 3 - Start //////////////////

const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]

// 1.Show only numbers

let onlyNumbers = arr3.filter(item => typeof item == 'number')
console.log(onlyNumbers)

// 2.Show only true values

for (let i = 0 ; i < arr3.length ; i++ ) {
     if(arr3[i]){
        console.log('true values' ,arr3[i]);
        
     }
}


// 3.Show only false values
for (let i = 0 ; i < arr3.length ; i++ ) {
    if(!(arr3[i])){
       console.log('false values',arr3[i]);
       
    }
}

// 4.Show only string

let onlyStrings = arr3.filter(item => typeof item == 'string')
console.log(onlyStrings)

////////////// TASK 3 - The End //////////////////



















////////////// TASK 4 - Start ////////////////////

const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]
// 1.Console (only even numbers)
let even1 = numbers.filter(item => (item % 2 == 0))
console.log('even', even1 )

// 2.Console (only odd numbers)
let odd1 = numbers.filter(item => !(item % 2 == 0))
console.log('odd', odd1 )

////////////// TASK 4 - The End //////////////


















////////////// TASK 5 - Start//////////////

const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]

// 1.Console all values of arr4 -
// if value is number add it 10, if value is string add to it value + is string,if is value falsy value add to it value+ is falsly value(with return word)
// Example: [10,'true',false]
// Result: [20, "true is string", "false is falsy value"]

 console.log(arr4)
//function (){ 
 const resultt = arr4.map(item => {
     if (typeof item == 'number') {
         return item + 10
     }else if (typeof item == 'string') {
        return item + 'is string'
    }else if (typeof item == false) {
        return 'false is value'

     }else{
        return item
     }
     }
     )
     console.log(resultt); 




// console.log(resultt);





// 2.Sum all numbers of arr4

let onlyNumberss = arr4.filter(item => typeof item == 'number')
son = 0
for (let i = 0 ; i < onlyNumberss.length ; i ++) {
    son += onlyNumberss[i]
}
console.log(son)


// 3.Count only the values that are true
cemlemek = 0
for (let i = 0 ; i < arr4.length ; i++ ) {
    if(arr4[i]){
     cemlemek += 1
        
       
    }
}

console.log('true values' , cemlemek);


// 4.Count only the values that are string

cemlemek1 = 0
for (let i = 0 ; i < arr4.length ; i++ ) {
    if(typeof arr4[i] == 'string'){
     cemlemek1 += 1
        
       
    }
}

console.log('string values' , cemlemek1);

// 5.Count only the values that are false

cemlemek2 = 0
for (let i = 0 ; i < arr4.length ; i++ ) {
    if(!(arr4[i])){
     cemlemek2 += 1
        
       
    }
}

console.log('false values' , cemlemek2);

////////////// TASK 5 - The End//////////////















////////////// TASK 6 - Start /////////////////////
let fullName = 'Alirza Guluzade Tajeddin'

// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)

console.log(fullName)

const butov = fullName.replaceAll(' ' , '')
const array = butov.split('')

console.log(array); 

// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin

const array1 = fullName.split(' ')

console.log('array1' ,array1)

const net = array1[0]
const net2 = array1 [1]
array1[0] = net2
array1[1] = net
console.log('array1' ,array1)





// 3) Alinan yeni arrayi stringe cevirin(join)

const array3 =array1.join(' ')
console.log(typeof array3 , ' - ' ,array3)


////////////////////////////////////////////////////////////////////////////////////////////////////////////




let arr = [8, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin

let count = 0
for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i] === 5) {
    count += 1
    }
}
console.log(count);


//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin

let sums = 0
for (let i = 0 ; i < arr.length ; i++) {
    sums += arr[i]
    
}
console.log(sums);


//6) arrayda tekrar olunan reqemleri artan sira ile duzun

// let cemm = 0
let say = 0
// for (let i = 0; i < arr.length ; i++) {
//     let  = arr[i]  
    
// }


console.log(arr)
const tekrarEdedlerToplusu = arr.map(item => {
    if (item === item) {
        return item 
    }
}) 
console.log(tekrarEdedlerToplusu)






// console.log('before',arr);
// let say = 0
// for(i of arr) {
//     for(let j =0 ; j<arr.length; j++) {
//         if (i === arr[j]) {
//             say += 1  
//         }   
//     }
// }

// console.log('after',say)




//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)

let maxNumber= Math.max(8, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7)
console.log(maxNumber)
let counts = 0
for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i] == maxNumber) {
    counts += 1
    }
}
console.log(counts);





//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
let firstnamee = 'Alirza'

const uzunluq =firstnamee.length
console.log('ehtimal 1' ,  ' ' , uzunluq , 'reqemi'  ,arr.includes(uzunluq))

let firstnamee1 = 'Edalettin'

const uzunluq1 =firstnamee1.length
console.log('ehtimal 2' , ' ' , uzunluq1 , 'reqemi' ,arr.includes(uzunluq1))

//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin

//arr 8, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7

for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i]%3 === 2) {
    console.log('element' ,'-',arr[i] , ' ' , 'element index', ' - ' ,arr.findIndex((item ) => item%3 ==2))
    break ;
    }
}

//10) arraydaki en boyuk reqemin ilk indexini tapin

// Note ;  yuxarida maxNubmer deyisenim var .  line 505


console.log('max nubmer first index','=',arr.findIndex((item ) => item === maxNumber))

//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin

let counnt = []
for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i] === 4) {
    counnt = counnt  + i + '  index of 4 / ' 
    }
}
console.log(counnt);




//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin




//13) "arr8" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr8" arrayinin uzunluqlari ferqini hesablayin
//14) 7 reqeminin indexleri cemini tapin.











































































///////////// TASK 7//////////////

let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]


//QEYD - !!! Bu tasklarda arr2 istifade edilecekdir və hər bir algorithm funksiya daxilində yazılmalıdır...

// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.