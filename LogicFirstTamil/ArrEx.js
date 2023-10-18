/*const arr=[5,8,10,7,9,11]
console.log(arr.splice(3,3,17,19,111))
console.log(arr)
console.log(arr.unshift(100))
console.log(arr)
arr.splice(arr.length-1,0,200)
console.log(arr)
arr.push(1000)
console.log(arr)
arr.splice(arr.length/2,0,0)
console.log(arr)
*/
/*
//template literals
itemCount=5
Total=5*19
console.log(`You have ${itemCount} items in your cart.`)
console.log(`Your bill amount is $${Total}`)
*/
/*//string
let name="Tamilkodi"
let randomIndex=Math.floor(Math.random()*name.length)
console.log(randomIndex)
console.log(name[randomIndex])*/
/* //arrow function 
let findSum=(arr)=>{
    let sum=0
    for(let val of arr){
        sum+=val
    }
    return sum
}
let total=findSum([2,3,4,5])
console.log(total) */
//forEach()
/*Input=[6,-4,-6,5,6,7,8]
let sum=0
Input.forEach(element => {
    if(element>0)
    sum+=element
});
console.log(sum)*/
//map,reduce,filter
//find the sum of +ve integers only
/*Input=[6,-5,7,-2,4,6,-1]
const pArray=Input.filter(val=>val>0)
let sum=pArray.reduce((acc,curVal)=>acc+curVal)
console.log(sum)*/
/*//Abbreviate by gathering first letter of each word
Name="Robert Andrew George"
let arr=Name.split(" ")
let str=arr.map(val=>val[0]).join("")
console.log(str)*/
//remove duplicates from the array
arr=[4,6,2,3,1,1,3,5,7,8,4,3]
let uniqueArr = arr.reduce((accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
        accumulator.push(currentValue);
    }
    return accumulator;
}, []);

console.log(uniqueArr);
    





