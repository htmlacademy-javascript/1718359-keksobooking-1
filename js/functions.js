function isPalindrome(string){
  const stringReverse = string.split('').reverse().join('').toLowerCase().replace(/ /g,'');
  return string.toLowerCase().replace(/ /g,'') === stringReverse ? true : false;

}

function getNumbers(value){
  return parseInt(String(value).replace(/[^0-9]/g,''), 10);

}


function createAddressFile(value, length, symbols){
  const valueArr = value.split('');
  const freePlace = length - valueArr.length;
  const elementsSymbols = symbols.slice(0, freePlace);
  elementsSymbols.split('').reverse().forEach((element) => {
    valueArr.unshift(element);
  });
  if(freePlace - elementsSymbols.length !== 0){
    if(value.length >= length){
      return value;
    }
    for(let i = 0; i < freePlace - elementsSymbols.length; i++){

      elementsSymbols.split('').forEach((element) => {
        valueArr.unshift(element);
      });
   }
 }
  return valueArr.slice(-length).join('');
}

function getFloatingPointNumber(from, to, numberDecimalPlaces){
  if(/-/.test(from) || /-/.test(to) || /-/.test(numberDecimalPlaces)){
    return NaN;
  }
  if(numberDecimalPlaces > to || from === to){
    return NaN;
  }
  const number = Math.floor(Math.random() * to) + from;
  return Number(`${String(number).slice(0, numberDecimalPlaces)}.${String(number).slice(numberDecimalPlaces)}`);
}

