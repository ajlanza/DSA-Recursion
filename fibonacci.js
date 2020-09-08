function fibonacci(n) {
  if(n === 1) {
    return 1;
  }
  if(n === 2) {
    return [1, 1]
  }
  
  else {
    let myArray = fibonacci(n -1);
    myArray.push(myArray[myArray.length -1] + myArray[myArray.length - 2]);
    return myArray;
  }
};
console.log(fibonacci(8));