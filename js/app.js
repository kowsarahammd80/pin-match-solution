function getPin(){
  let pin = generatePin();
  let pinString = pin + '';
  if(pinString.length === 4){
    return pin;
  }
  else{
    
    return getPin();
  }
}

function generatePin(){
  let random = Math.round(Math.random()*10000);
  return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
  let pin = getPin();
  //set display pin
  let displayPinField = document.getElementById('display-pin');
  displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
   let number = event.target.innerText;

   let typeNumberField = document.getElementById('type-number');

   let previousTypeNumber = typeNumberField.value;
   if(isNaN(number)){
     if(number === 'C'){
       typeNumberField.value = '';
     }
     else if(number === '<'){
       let digits = previousTypeNumber.split('');
       digits.pop();
       let remainingDigits = digits.join('');
       typeNumberField.value = remainingDigits;
     }
   }
   else{

    let newTypeNumber = previousTypeNumber + number;
    typeNumberField.value = newTypeNumber; 
   }
}) 
 
document.getElementById('verefy-pin').addEventListener('click', function(){
  let displayPinField = document.getElementById('display-pin');
  let currentPin = displayPinField.value;

  let typeNumberField = document.getElementById('type-number');
  let typeNumber = typeNumberField.value;

  let pinSuccessMassage = document.getElementById('pin-success');
  let pinUnSuccessMassage = document.getElementById('pin-unsuccess');

  if(typeNumber === currentPin){
    
    pinSuccessMassage.style.display = 'block';
    pinUnSuccessMassage.style.display = 'none';

  }
  else{
    pinUnSuccessMassage.style.display = 'block';
    pinSuccessMassage.style.display = 'none';

  }
})