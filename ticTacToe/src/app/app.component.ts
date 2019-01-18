import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ticTacToe';
  urls : string[] = ["", "", "", "", "", "", "", "", ""];
  viejas : string[] = ["../assets/vieja2.gif", "../assets/vieja1.jpg", "../assets/vieja3.gif", "../assets/vieja4.gif", "../assets/vieja5.png", "../assets/vieja6.jpg", "../assets/vieja7.jpg", "../assets/vieja8.png"];
  turno : boolean = true ;
  clicados : number[] = [];
  opcion : number = 0;
  finDelJuego : boolean = false;
  imgGanador : string = "";
  mensajeGanador : string = "";
  x : string = "X";
  o : string = "O";
  ptosX : number = 0;
  ptosO : number = 0;
  ptosV : number = 0;
  estadoPopUp : boolean = false;


  ponerMarca(num){
    let result = this.clicados.some(pieza => pieza === num);

    if (!result && !this.finDelJuego) {
      this.clicados.push(num);

      if (this.turno === false) {
        this.urls[num] = "../assets/FotoCirculo.jpg";
        this.turno = true;
      } else {
        this.urls[num] = "../assets/FotoX.jpg";
        this.turno = false;
      }

      this.ganador();
    }

    
  }

  ganador(){
    let result = this.urls.some(pieza => pieza === "");

    if (this.urls[0] === this.urls[1] && this.urls[0] === this.urls[2] && this.urls[0] !== "") {
      this.finDelJuego = true;
      this.mostrarMensajeGanador(true, this.urls[0]);
    }else if (this.urls[0] === this.urls[3] && this.urls[0] === this.urls[6] && this.urls[0] !== "") {
      this.finDelJuego = true;
      this.mostrarMensajeGanador(true, this.urls[0]);
    }else if (this.urls[0] === this.urls[4] && this.urls[0] === this.urls[8] && this.urls[0] !== "") {
      this.finDelJuego = true;
      this.mostrarMensajeGanador(true, this.urls[0]);
    }else if (this.urls[1] === this.urls[4] && this.urls[1] === this.urls[7] && this.urls[1] !== "") {
      this.finDelJuego = true;
      this.mostrarMensajeGanador(true, this.urls[1]);
    }else if (this.urls[2] === this.urls[5] && this.urls[2] === this.urls[8] && this.urls[2] !== "") {
      this.finDelJuego = true;
      this.mostrarMensajeGanador(true, this.urls[2]);
    }else if (this.urls[2] === this.urls[4] && this.urls[2] === this.urls[6] && this.urls[2] !== "") {
      this.finDelJuego = true;
      this.mostrarMensajeGanador(true, this.urls[2]);
    }else if (this.urls[3] === this.urls[4] && this.urls[3] === this.urls[5] && this.urls[3] !== "") {
      this.finDelJuego = true;
      this.mostrarMensajeGanador(true, this.urls[3]);
    }else if (this.urls[6] === this.urls[7] && this.urls[6] === this.urls[8] && this.urls[6] !== "") {
      this.finDelJuego = true;
      this.mostrarMensajeGanador(true, this.urls[6]);
    }else if (!result){
      this.finDelJuego = true;
      this.mostrarMensajeGanador(false, "");
    }
  }

  mostrarMensajeGanador(selector, ganador){
    if (selector) {
      this.imgGanador = ganador;
      this.mensajeGanador = "Felicidades el ganador es ";
      if (ganador === "../assets/FotoX.jpg") {
        this.ptosX ++;
      } else {
        this.ptosO ++;
      }
    } else {
      let num = Math.floor(Math.random() * this.viejas.length);
      console.log(num);
      this.imgGanador = this.viejas[num];
      this.mensajeGanador = "Que mal, la vieja ganó... ";
      this.ptosV ++;
    }
    
  }

  reiniciar(){
    this.urls = ["", "", "", "", "", "", "", "", ""];
    this.finDelJuego = false;
    this.clicados = [];
    this.turno = true;
  }

  seRindio(){
    this.reiniciar();
    this.ptosX = 0;
    this.ptosO = 0;
    this.ptosV = 0;
  }

  abrirPopUp(){
    this.estadoPopUp = true;
  }

  cerrarPopUp(){
    this.estadoPopUp = false;
  }
}
