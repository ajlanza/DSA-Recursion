const jumped = function(sheep) {
  if (sheep === 0 ) {
    console.log('All sheep jumped over the fence')
  }
  else {
    console.log(sheep + ': Another sheep jumps over the fence');
    jumped(sheep-1); 
  }
}

let num = 3;
jumped(num);