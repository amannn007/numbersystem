//Calculate Max,Sum and Min
function calculateArrayStats(numbers){
    if(numbers.length===0)
    {
        console.log("The array is empty.")
    }

    let max=numbers[0];
    let min=numbers[0];
    let sum=0;
    numbers.forEach(function(number)
{
    if(number>max){
        max=number;
    }
    if(number<min){
        min=number;
    }
    sum+=number;
})
console.log("Maximum:",max)
console.log("Minimum:",min)
console.log("Sum:",sum)
}

//Example
const numbers=[1,2,3,4,5,6,7,8,9,10]
calculateArrayStats(numbers)