//Code for Even and Odd numbers

function checkEvenOddInArray(numbers){
    numbers.forEach(function(number)
{
    if(numbers%2===0)
    {
        console.log(number +""+ " is even.")
    }else
    {
        console.log(number +""+ " is odd.")
    }
});
}

//Example
const arr=[1,2,3,4,5,6,7,8,9,10];
checkEvenOddInArray(arr);