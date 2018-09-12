function range(start, end, step) {
  let array = [];

  if( start < end ){
    step = 1;
  }
  else{
    step = -1;
  }

  if (step > 0) {
    for (let i = start; i <= end; i += step) 
      array.push(i);
  } 
  else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}
