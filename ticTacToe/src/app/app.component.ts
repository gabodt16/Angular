import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ticTacToe';
  casillas : number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  turno : boolean = false ;
  clicados : number[] = [];


  ponerMarca(num){
    let result = this.clicados.some(pieza => pieza === num);

    console.log(result);

    if (!result) {
      this.clicados.push(num);

      if (this.turno === false) {
        this.casillas[num] = 2;
        this.turno = true;
      } else {
        this.casillas[num] = 1;
        this.turno = false;
      }
    }

  }
}
