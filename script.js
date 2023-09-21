const squares = document.getElementsByClassName('p-4');

for (let i = 0; i < 64; i++ ){
    squares[i].textContent = String(squares[i].classList[5]) + String(squares[i].classList[4])
}
