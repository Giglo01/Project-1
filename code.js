// function findPosAndnEG(n){
    
//     if(n>0){
//         return this is a ${n} Postive Number
//     }
//     else{
//         return this is a ${n} Negativre Number
//     }

// }

// console.log(findPosAndnEG(5));
// console.log(findPosAndnEG(8));
// console.log(findPosAndnEG(-2));
// console.log(findPosAndnEG(0));


// function findevnAndodd(n){
    
//     if(n%2==0){
//         return this is a ${n} Even Number
//     }
//     else{
//         return this is a ${n} Odd Number
//     }

// }

// console.log(findevnAndodd(4));
// console.log(findevnAndodd(45345));
// console.log(findevnAndodd(789));
// console.log(findevnAndodd(1234753));

// function findgreaterno(a,b){
//     if(a>b){
//         return ${a} is greater
//     }
//     else{
//         return ${b} is greater
//     }
// }
//     console.log(findgreaterno(12,8));


// function findgradeofstudents(m){
//     if(m>=91&& m<=100){
//         return Assign A Grade
//     }
//     else if(m>=81 && m<=90){
//         return Assign B Grade
//     }
//      else if(m>=71 && m<=80){
//         return Assign C Grade
//      }
    
//     else if(m>=61 && m<=70){
//        return Assign D Grade
//     }
//     else if(m<60 && m>0){
//         return fail
//     }
//     else{
// return invalid no
//     }
    
// }
// console.log(findgradeofstudents(860.5));
// console.log(findgradeofstudents(88));
// console.log(findgradeofstudents(77.8));
// console.log(findgradeofstudents(65));
// console.log(findgradeofstudents(40));

// function calculateprice(p){
//     if(p>=0 && p<=12){
//         return `Pay the ticket price 5`
//     }
//     else if(p>=13 && p<=18){
//         return `Pay the ticket price 10`
//     }
//     else if (p>=19 && p<=60){
//         return `Pay the ticket price 20`
//     }
//     else if (p<=85 && p>=60){
//         return `Pay the ticket price 15`
//     }
//     else{
//         return `null`
//     }
// }
// console.log(calculateprice(15));
// console.log(calculateprice(6));
// console.log(calculateprice(55));
// console.log(calculateprice(78));
// console.log(calculateprice(250));

// {
//     for(let i=1; i<=10; i++){
//         console.log(i);
//     }
// }

// function findleapyear(year){
//     if (year % 4 ==0 ){
//         return `true`
//     }
//     else {
//         return `false`
//     }

// }
// console.log(findleapyear(2023));
// console.log(findleapyear(2024));

// const studatdata = {
//     Ayush:{ NAme: 'Ayush', Age: 15, Class: 10,},

//     Anmol:{ Name: 'Anmol', Age: 18, Class: 'BBA',},

//     Abhishak: { Name: 'Abhishak', Age: 16, Class: 12,},

//     Nitish: { Name: 'Nitish', Age: 20, Class:'BCA',},

//     Aryan: { Name: 'Aryan', Age: 19 , Class: 'BFA',},

//     Abhinav: { Name: 'Abhinav', Age: 14 , Class: '9',},

//     Robin: { Name: 'Robin', Age: 20 , Class: 'BA',},

//     Gavi: { Name: 'Gavi', Age: 18 , Class: 'BBA' ,},

//     Lakshay: { Name: 'Lakshay', Age: 17 , Class: 'BFA',},

//     Anirudh: { Name: 'Anirudh', Age: 21 , Class:'B.Tec' ,},

//     Deepika: { Name: 'Deepika', Age: 20, Class: 'MCA ',},

// }
// console.log('Name -', studatdata.Anmol.Name,);
// console.log('Age -', studatdata.Anmol.Age);
// console.log('Class -', studatdata.Anmol.Class);

// console.log('Name -', studatdata.Gavi.Name);
// console.log('Age -', studatdata.Gavi.Age);
// console.log('Class -', studatdata.Gavi.Class);

// console.log('Name -', studatdata.Aryan.Name);
// console.log('Age -', studatdata.Aryan.Age);
// console.log('Class -', studatdata.Aryan.Class);


// const studatdata = [
//  { Name: 'Ayush', Age: 15, Class: 10},

// { Name: 'Anmol', Age: 18, Class: 'BBA'},

// { Name: 'Abhishak', Age: 16, Class: 12},

// { Name: 'Nitish', Age: 20, Class:'BCA'},

// { Name: 'Aryan', Age: 19 , Class: 'BFA'},

// { Name: 'Abhinav', Age: 14 , Class: '9'},

// { Name: 'Robin', Age: 20 , Class: 'BA'},
// { Name: 'Gavi', Age: 18 , Class: 'BBA' },

// { Name: 'Lakshay', Age: 17 , Class: 'BFA'},

// { Name: 'Anirudh', Age: 21 , Class:'B.Tec'},

// { Name: 'Deepika', Age: 20, Class: 'MCA '},
// ]

// for(let i=0; i<studatdata.length; i++){
//     console.log(i,'Age',studatdata[i].Age)
// }


// const studatdata = [
//     { Name: 'Ayush', Age: 15, Class: 10},
   
//    { Name: 'Anmol', Age: 18, Class: 'BBA'},
   
//    { Name: 'Abhishak', Age: 16, Class: 12},
   
//    { Name: 'Nitish', Age: 20, Class:'BCA'},
   
//    { Name: 'Aryan', Age: 19 , Class: 'BFA'},
   
//    { Name: 'Abhinav', Age: 14 , Class: '9'},
   
//    { Name: 'Robin', Age: 20 , Class: 'BA'},
//    { Name: 'Gavi', Age: 18 , Class: 'BBA' },
   
//    { Name: 'Lakshay', Age: 17 , Class: 'BFA'},
   
//    { Name: 'Anirudh', Age: 21 , Class:'B.Tec'},
   
//    { Name: 'Deepika', Age: 20, Class: 'MCA '},
//    ]
   
// const filteFunction = studatdata.filter(function(a){return a.Age>19})
// console.log(filteFunction);

// const data = [12, 43, 34, 56, 57, 56, 75 ]
   
// const mapfunction = data.map(function(t){return t+10})
// console.log(mapfunction);
   
const pay=[10, 10, 10, 10, 10, 5 ]
const reducefunction = pay.reduce (function (a,b){return a+b},1200)
console.log(reducefunction);
