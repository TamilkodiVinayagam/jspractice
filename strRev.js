/*let txt=[];
function strRev(stri){
for(let i=stri.length-1;i>=0;i--){
    txt.push(stri[i]);
}
return txt.join("");
}

let rev=strRev("Tamilkodi");
console.log(rev);*/

function fizzBuzz(){
   for(let i=1;i<=100;i++){
    if((i%3==0) && (i%5==0)){
        console.log("FizzBuzz"+i);
    }
    else if(i%5==0){
        console.log("Buzz"+i);
 }
  else if(i%3==0){
console.log("Fizz"+i)
 }
 else{
    console.log(i);
 }
    }
   } 
   fizzBuzz();