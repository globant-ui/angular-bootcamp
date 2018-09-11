function countChar(string, ch) {
    let cont = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ch) {
        cont += 1;
      }
    }
    return cont;
  }
  
  function countBs(string) {
    return countChar(string, "B");
  }
  