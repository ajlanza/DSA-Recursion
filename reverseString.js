function reverseString(string) {
  if(string === '') {
    return '';
  } 
  else {
    return reverseString(string.substr(1)) + string.charAt(0); 
 }
}

const string='is this backwards?';
console.log(reverseString(string));
