class TicTacToe {
    constructor() {
        let size=3;
        this.field= new Array(size).fill(null).map(el=> new Array(size).fill(null));
        this.current = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.current;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.field[rowIndex][columnIndex]) {
            if (this.getCurrentPlayerSymbol() === "x") {
                this.field[rowIndex][columnIndex] = "x";
                this.current = 'o';

            } else {
                this.field[rowIndex][columnIndex] = "o";
                this.current = 'x';
            }
        }
    }


    isFinished() {
        return (this.getWinner() || this.isDraw()) ? true : false;
    }




    getWinner() {
  


        



       if ((this.field[0][0] !== null) && this.field[0][0] == this.field[0][1] && this.field[0][0] == this.field[0][2]) return this.getFieldValue(0,0);
       if ((this.field[1][0] !== null) && this.field[1][0] == this.field[1][1] && this.field[1][0] == this.field[1][2]) return this.getFieldValue(1,0);
     if ((this.field[2][0] !== null) && this.field[2][0] == this.field[2][1] && this.field[2][0] == this.field[2][2]) return this.getFieldValue(2,0);

       if ((this.field[0][0] !== null) && this.field[0][0] == this.field[1][0] && this.field[0][0] == this.field[2][0]) return this.getFieldValue(0,0);
       if ((this.field[0][1] !== null) && this.field[0][1] == this.field[1][1] && this.field[0][1] == this.field[2][1]) return this.getFieldValue(0,1);
       if ((this.field[0][2] !== null) && this.field[0][2] == this.field[1][2] && this.field[0][2] == this.field[2][2]) return this.getFieldValue(0,2);

       if ((this.field[0][0] !== null) && this.field[0][0] == this.field[1][1] && this.field[0][0] == this.field[2][2]) return this.getFieldValue(0,0);
       if ((this.field[0][2] !== null) && this.field[0][2] == this.field[1][1] && this.field[0][2] == this.field[2][0]) return this.getFieldValue(0,2);

        return null;
    }
    

    noMoreTurns() {
        return this.field.every(item => !(item.includes(null)));
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;