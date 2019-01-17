import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ticTacToe';
  turno : boolean = false;

  ponerMarca(id){
    if (this.turno === false) {
      document.getElementById('id').innerHTML= "<img src='../assets/FotoX.jpg'>";
      this.turno = true;
    } else {
      document.getElementById('id').innerHTML= "<img src='../assets/FotoCirculo.jpg'>";
      this.turno = false;
    }
  }
}
