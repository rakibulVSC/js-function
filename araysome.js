// const numbers=[12,4,6,18,56];
// // let sum=0;
// // for(number of numbers){
// //     sum=sum+number;
// //     console.log(number,sum)
// // }
// // console.log(sum)
//   let sum=0;
// function sumOfArray(array){
//     console.log('inside the function',array)
  
//     for(num of array){
//         console.log(num)
//       sum=sum+num;
     
//     }
//      return sum;
// }
// const result=sumOfArray(numbers);
// console.log('sum of array:',sum);
// const resultOdd=sumOfArray(odds);
// console.log('sum of odd numbers',resultOdd)

const marks=[12,87,14,51,36,46];
// const evens=[];
// for(mark of marks){
    
//     if(mark%2 === 0){
//         console.log('even:',mark);
//         evens.push(mark)
//     }
// }

function getEvenNumbers (array){
    const evens=[];
    for(const mark of array){
        if(mark % 2 === 0){
            evens.push(mark);
            
        }
       
    }
     return evens;
}
const result=getEvenNumbers(marks);
console.log(result)