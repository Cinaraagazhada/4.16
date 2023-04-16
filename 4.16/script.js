var array = [32, 25, 85, 89, 45, 76, 41, 2, 12];
// // a)
// let a=array.slice(0)
// console.log(a);


// // b)
// let a=Math.max(...array);
// console.log(a);

// // c)
// array.push(15);
// console.log(array);


// // d)
// array.shift(0);
// console.log(array);

// // e)
// array.sort()
// console.log(array[array.length-1]);

// // f)
// array.splice(3,0,43)
// console.log(array);
// // g)
// console.log(array.slice(3));

// // h)
// array.forEach((a)=>console.log(a))

// // i)
// array.map((a) => {
//     if (a > 40) {
//         console.log(a);
//     }
// })
// for(let i=0;i<array.length;i++){
//     if(array[i]>40){
//         console.log(array[i]);
//     }
// }

// // TASK2
// var getStudentName=([
//     {Name:"Chinara"},
//     {Name:"Ayshan"},
//     {Name:"Nuray"}

// ])
// console.log(getStudentName.map((a)=>{
//     return a.Name;
// }));

// // TASK3
var checkFactors=function(array,number){
    for (let i = 0; i < array.length; i++) {
        if (number%array[i]!==0) {
            return false
        }
        
        
    }
    return true
}
console.log(checkFactors([3,11,9],99));
console.log(checkFactors([5,7,12],100));



// // TASK4

// const getSequance=function(a,b){
//     let array=[];
//     for( let i=a;i<=b;i++){
//         array.push(i)
//     }
//     console.log(array);
   
// }
// getSequance(77,80)





