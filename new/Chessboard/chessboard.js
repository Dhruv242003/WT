function resizeChessboard() {
  const chessboard = document.getElementById("chessboard");
  const width = window.innerWidth * 0.9; // 90% of window width
  const height = window.innerHeight * 0.9; // 90% of window height

  chessboard.style.width = `${width}px`;
  chessboard.style.height = `${height}px`;

  const cells = document.querySelectorAll(".cell");
  const cellSize = Math.min(width, height) / 8; // Dividing into 8x8 grid

  cells.forEach((cell) => {
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
  });
}

// Call the function initially and on window resize
window.addEventListener("resize", resizeChessboard);
resizeChessboard();

let chessboard = document.getElementById("chessboard");

for(let i=1; i<8; i++){
  let cellcontainer = document.createElement("div");
  cellcontainer.className = "cellContainer";
  for(let j=1; j<8; j++){
    let cell = document.createElement("div");
    cell.className = "cell";

    if(i%2 == 0){
      if(j%2 == 0){
        cell.style.backgroundColor = "black"
      }
      else{
        cell.style.backgroundColor = "white"
      }
    }
    else{
      if(j%2 == 0){
        cell.style.backgroundColor = "white"
      }
      else{
        cell.style.backgroundColor = "black"
      }
    }

    cellcontainer.append(cell);
  }
  chessboard.append(cellcontainer);
}
