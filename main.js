const body = document.querySelector('body');
let id = 1;
let step = 0;

class Game {

    matrix = [];
    winner = false;

    constructor(size, username) {
        this.gameSize = size;
        this.userName = username;

        this.createGrid();
        this.createCells();
        this.createMatrix();

        const cells = document.querySelectorAll('.cell');

        for (let item of cells) {
            item.addEventListener('click', function (event) {
                newGame.makeAStep(item);
            });
        }
    }

    createGrid() {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.style.width = this.gameSize * 150 + 'px';
        grid.style.height = this.gameSize * 150 + 'px';
        grid.style.margin = '0 auto';
        grid.style.marginTop = '150px';
        grid.style.display = 'flex';
        grid.style.flexWrap = 'wrap';

        body.append(grid);
    }

    createCells() {
        const grid = document.querySelector('.grid');

        for (let row = 0; row < this.gameSize * this.gameSize; row++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.id = `${id}`;
            id++;

            grid.append(cell);
        }
    }

    restartGame(){
        const cells = document.querySelectorAll('.cell');

        for(let item of cells){
            item.innerHTML = "";
            item.setAttribute('position', null);
        }
    }

    createMatrix (){

        const cells = document.querySelectorAll('.cell');

        let cellsArray = [];

        for (let item of cells) {
            cellsArray.push(item);
        }


        for (let i = 0; i < this.gameSize; i++) {
            this.matrix.push([]);
            for (let x = 0; x < this.gameSize; x++) {
                this.matrix[i].push(cellsArray[0]);
                cellsArray.splice(0, 1);
            }
        }


    }

    choseAWinner() {

        let nr = [];
        let h = [];

        let nr2 = [];
        let h2 = [];

        let nr3 = [];
        let h3 = [];

        for(let i = 0; i < this.gameSize; i++){
            for(let n = 0; n < this.gameSize; n++){
                h.push(this.matrix[n][i]);
            }
            nr.push(h);
            h = [];
        }

        let winner = 1;

        for (let i = 0; i < this.gameSize; i++) {
            for (let j = 1; j < this.gameSize; j++) {
                if(this.matrix[i][j-1].getAttribute('position') === this.matrix[i][j].getAttribute('position') & (this.matrix[i][0].getAttribute('position') === 'x' || this.matrix[i][0].getAttribute('position') === 'o')){
                    winner = winner + 1;
                }else{
                    winner = 1;
                }
            }
            if(winner === this.gameSize){
                if(this.matrix[i][0].getAttribute('position') === 'x'){
                    alert(`Winner: ${this.userName}`)
                }else{
                    alert(`Winner: computer`)
                }                winner = 1;
                this.restartGame();
            }
        }


        for (let i = 0; i < this.gameSize; i++) {
            for (let j = 1; j < this.gameSize; j++) {
                if(nr[i][j-1].getAttribute('position') === nr[i][j].getAttribute('position') & (nr[i][0].getAttribute('position') === 'x' || nr[i][0].getAttribute('position') === 'o')){
                    winner = winner + 1;
                }else{
                    winner = 1;
                }
            }
            if(winner === this.gameSize){
                if(nr[i][0].getAttribute('position') === 'x'){
                    alert(`Winner: ${this.userName}`)
                }else{
                    alert(`Winner: computer`)
                }
                winner = 1;
                this.restartGame();
            }
        }



        for(let i = 0; i < this.gameSize; i++){
            nr2.push(this.matrix[i][i])
           // nr2.push(h2);
            //h2 = [];
        }

        for(let i = 0; i < this.gameSize; i++) {
            nr3.push(this.matrix[i][this.matrix.length-i-1])
          //  nr3.push(h3);
            //h3 = [];
        }

        for(let i = 1; i < nr3.length; i++){
            if(nr2[i-1].getAttribute('position') === nr2[i].getAttribute('position') & (nr2[0].getAttribute('position') === 'x' || nr2[0].getAttribute('position') === 'o')){
                winner = winner + 1;
            }else{
                winner = 1;
            }
        }
        if(winner === this.gameSize){
            if(nr2[0].getAttribute('position') === 'x'){
                alert(`Winner: ${this.userName}`)
            }else{
                alert(`Winner: computer`)
            }
            winner = 1;
            this.restartGame();
        }


        for(let i = 1; i < nr3.length; i++){
             if(nr3[i-1].getAttribute('position') === nr3[i].getAttribute('position') & (nr3[0].getAttribute('position') === 'x' || nr3[0].getAttribute('position') === 'o')){
                winner = winner + 1;
             }else{
                 winner = 1;
             }
        }

        if(winner === this.gameSize){
            if(nr3[0].getAttribute('position') === 'x'){
                alert(`Winner: ${this.userName}`)
            }else{
                alert(`Winner: computer`);
            }
            winner = 1;
            this.restartGame();
        }
    }


    makeAStep(cell) {
        if(step === 0 & cell.getAttribute('position') !== 'o'){
            cell.setAttribute('position', 'x');
            cell.innerHTML = 'X';
            step = 1;
        }else if(step === 1 & cell.getAttribute('position') !== 'x'){
            cell.setAttribute('position', 'o');
            cell.innerHTML = 'O';
            step = 0;
        }

        this.choseAWinner();
    }
}

const input = document.querySelector('.form__input');
const userButton = document.querySelector('.form__button');
const form = document.querySelector('.form');
let userName = input.value;


form.addEventListener('input', function(e){
   userName = input.value;
});



//const newGame = new Game(4, userName);



