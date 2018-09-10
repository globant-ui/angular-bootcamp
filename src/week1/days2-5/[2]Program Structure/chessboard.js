let chessboardSize = 8;
let chessBoard = "";

for(let nColumn = 0; nColumn<chessboardSize; nColumn++){   
   for(let nRow = 0; nRow<chessboardSize; nRow++){      
      if((nColumn+nRow) % 2 == 0)
         chessBoard+=" ";
      else
         chessBoard+="#";
   }
   chessBoard+= "\n";
}
console.log(chessBoard);
