// objects

const student = {
    firstName : 'Alirza' ,
    lastName : 'Guluzade' ,
    'father-name' : 'Tajeddin' ,
    99 : 18 ,
    year : 2006 ,
    uni : 'AACU',
    isadmin : true ,
    fin : undefined ,
    tax : null ,
    address : {
        city : 'Jalilabad' ,
        address : {
            test : 'Code' 
        } , 
        country : 'Azerbaijan',
        extra : {
            street : ' Nizami 14'
        }
    } ,
    email : 'alirzatg@code.edu.az'

}

// console.log(student)
// console.log(student.firstName)
// console.log(student.lastName)
// console.log(student["father-name"])
// console.log(student.email)
// console.log(student[99])
// console.log(student.year)
// console.log(student.uni)
// console.log(student.tax)
// console.log(student.fin)
// console.log(student.isadmin)
// console.log(student.address)
// console.log(student.address.city)
// console.log(student.address.address.test)
// console.log(student.address.country)
// console.log(student.address.extra.street)

student.personalInfo = {}
student.personalInfo.salary = '1000'
console.log('student' , student)