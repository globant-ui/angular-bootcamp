function arrayToList(array) {
   let list = null;
   for (let i = array.length - 1; i >= 0; i--) {
      list = prepend(array[i],list);
   }
   return list;
}

function prepend(value, list) {
   return {value, rest: list};
}

function listToArray(list) {
   let array = [];
   let node = list;
   while (node!=null){      
      array.push(node.value);
      node = node.rest;
   }
   return array;
}


function nth(list, n) {
   while(n>0 && list){
      n--;
      list = list.rest;
   }
   if (!list) 
      return undefined;
   else
      return list.value;
}