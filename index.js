import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

let dayInput = document.getElementById('day')
let monthInput = document.getElementById('month')
let yearInput = document.getElementById('year')
let submitButton = document.querySelector('.submit-buton')
let dayPElement = document.getElementById('days-p')
let monthPElement = document.getElementById('months-p')
let yearPElement = document.getElementById('years-p')
let errorMessageDay = document.querySelector('.error-msg-day')
let errorMessageMonth = document.querySelector('.error-msg-month')
let errorMessageYear = document.querySelector('.error-msg-year')
let labelDay = document.querySelector('.label-day')
let labelMonth = document.querySelector('.label-month')
let labelYear = document.querySelector('.label-year')


let today = new Date();
let dayNow = today.getDate();
let monthNow = today.getMonth()+1;
let yearNow = today.getFullYear();



submitButton.addEventListener('click',errorMessages)

function errorMessages(){
  let day = dayInput.value
  let month = monthInput.value
  let year = yearInput.value
  if(dayInput.value===''){
    errorMessageDay.innerHTML='This field is required'
    dayInput.style.borderColor='hsl(0, 100%, 67%)'
    labelDay.style.color='hsl(0, 100%, 67%)'
  }else if(dayInput.value>'31'||dayInput.value<='0'){
    errorMessageDay.innerHTML='Must be a valid day'
    dayInput.style.borderColor='hsl(0, 100%, 67%)'
    labelDay.style.color='hsl(0, 100%, 67%)'
  }else if (monthInput.value=='02'&& dayInput.value>'28'){
    errorMessageDay.innerHTML='Must be a valid day'
    dayInput.style.borderColor='hsl(0, 100%, 67%)'
    labelDay.style.color='hsl(0, 100%, 67%)'
  } else {
    errorMessageDay.innerHTML=''
    dayInput.style.borderColor='hsl(0, 0%, 86%)'
    labelDay.style.color='hsl(0, 1%, 44%'
  }
  if(dayInput.value>'30' && monthInput.value == '04'||dayInput.value>'30' && monthInput.value=='06'||dayInput.value>'30' && monthInput.value=='09'||dayInput.value>'30' && monthInput.value=='11'){
    errorMessageDay.innerHTML='Must be a valid day'
    dayInput.style.borderColor='hsl(0, 100%, 67%)'
    labelDay.style.color='hsl(0, 100%, 67%)'
  }
  

  if(monthInput.value===''){
    errorMessageMonth.innerHTML='This field is required'
    monthInput.style.borderColor='hsl(0, 100%, 67%)'
    labelMonth.style.color='hsl(0, 100%, 67%)'
  }else if(monthInput.value>'12'||monthInput.value<='0'){
    errorMessageMonth.innerHTML='Must be a valid month'
    monthInput.style.borderColor='hsl(0, 100%, 67%)'
    labelMonth.style.color='hsl(0, 100%, 67%)'
  }else {
    errorMessageMonth.innerHTML=''
    monthInput.style.borderColor='hsl(0, 0%, 86%)'
    labelMonth.style.color='hsl(0, 1%, 44%)'
  }

  if(yearInput.value===''){
    errorMessageYear.innerHTML='This field is required'
    yearInput.style.borderColor='hsl(0, 100%, 67%)'
    labelYear.style.color='hsl(0, 100%, 67%)'
  }else if(yearInput.value>yearNow||yearInput.value<='0'){
    errorMessageYear.innerHTML='Must be in the past'
    yearInput.style.borderColor='hsl(0, 100%, 67%)'
    labelYear.style.color='hsl(0, 100%, 67%)'
  }else {
    errorMessageYear.innerHTML=''
    yearInput.style.borderColor='hsl(0, 0%, 86%)'
    labelYear.style.color='hsl(0, 1%, 44%)'
  }
  if(yearInput.value>=yearNow&&monthInput.value>=monthNow&&dayInput.value>dayNow){
    errorMessageMonth.innerHTML='Must be in the past'
    errorMessageDay.innerHTML='Must be in the past'
    dayInput.style.borderColor='hsl(0, 100%, 67%)'
    labelDay.style.color='hsl(0, 100%, 67%)'
    monthInput.style.borderColor='hsl(0, 100%, 67%)'
    labelMonth.style.color='hsl(0, 100%, 67%)'
  }
  if(errorMessageDay.innerHTML=='' & errorMessageMonth.innerHTML=='' & errorMessageYear.innerHTML==''){
    calculateAge(day,month,year)
  }
  
}

function calculateAge(d,m,y){
   let dayP;
   let monthP;
   let yearP = yearNow-y
   if(monthNow>=m){
    monthP=monthNow-m
   }else {
    yearP--
    monthP=12+monthNow-m
   }
   if(dayNow>=d){
    dayP = dayNow-d
   }else {
    monthP--
    dayP= getDaysInMonths(y,m)+dayNow-d
   }
   if(monthP<0){
    yearP--
    monthP=11
    
   }
  
   dayPElement.innerHTML=dayP
   monthPElement.innerHTML=monthP
   yearPElement.innerHTML=yearP
}

function getDaysInMonths(year,month){
  console.log(new Date(year,month,0).getDate())
  return new Date(year,month,0).getDate()
  
}