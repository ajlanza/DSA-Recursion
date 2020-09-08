function binary(baseTen){
  if (baseTen >=1 )
    return binary(Math.floor(baseTen/2)) + (baseTen % 2);
  return '';
}

console.log(binary(16));