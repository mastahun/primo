const squares = document.getElementsByClassName('p-4');

for (let i = 0; i < 64; i++ ){
    squares[i].textContent = String(squares[i].classList[5]) + String(squares[i].classList[4])
}


// factories for chess pieces

const baseChessPiece = (letter, number) => {
    let isAlive = true;
    
}