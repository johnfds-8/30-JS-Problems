// Create a Program that checks if a given year is a leap year.


const year =( prompt("Enter your Year:"))

const isLeapyear= ()=>{
  if((year % 4 === 0 && year % 100 !== 0 ) || year % 400 === 0){
    alert( true);
  }else{
    alert(false)
  }
}

isLeapyear();