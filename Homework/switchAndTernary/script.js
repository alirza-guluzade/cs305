// Switch and Ternary
//  Alirza Guluzade

/// Introduction ///

/* 

In JavaScript,the 'switch case' is a control structure that 
allows for evaluating an expression against multiple possible cases, 

while the 'ternary operator' provides a compact syntax 
for writing simple conditional statements in a single line. 

Today, we will discuss how 'switch case and ternary operator' work, 
compare them with other operators, and explore their applications in programming.

*/


/// Main Part ///


//  What is a ternary operator?


///                  condition ? trueExpression : falseExpression                              ///



// let userAge = 18

// if (userAge >=  18) {
//     console.log(' true')
// } else {
//     console.log('false');
    
// }

// let result = userAge >=18 ? 'true ' : 'false'
// console.log (result)


// What is a switch case in programming ?

// Note : menuOption : pizza , pasta , salad , burger , sushi , tacos ,sandwich , soup , steak , ecs .


let menuOption = 'pizza'

// if ( menuOption === 'pizza') {
//     console.log( ' 10 $')
// } else {
//     console.log( 'false');
    
// }


switch (menuOption) {
    case 'burger' :
        console.log('10 $')
        break ;
    default :
       console.log('false')    
}