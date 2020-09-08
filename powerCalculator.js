const powerCalculator = function(base, exponent){
  if(exponent < 0){
    return 'exponent should be >= 0';
  }
  else {
    if(exponent === 0){
      return 1;
    }
    else {
      return base * powerCalculator(base, exponent-1);
    }
  }
}

const base=2;
const exponent=5;
console.log(powerCalculator(base, exponent));