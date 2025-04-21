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

function calculateprice(p){
    if(p>=0 && p<=12){
        return `Pay the ticket price 5`
    }
    else if(p>=13 && p<=18){
        return `Pay the ticket price 10`
    }
    else if (p>=19 && p<=60){
        return `Pay the ticket price 20`
    }
    else if (p<=85 && p>=60){
        return `Pay the ticket price 15`
    }
    else{
        return `null`
    }
}
console.log(calculateprice(15));
console.log(calculateprice(6));
console.log(calculateprice(55));
console.log(calculateprice(78));
console.log(calculateprice(250));

