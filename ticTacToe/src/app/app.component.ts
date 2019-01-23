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
  estadoIaFacil : boolean = false;
  estadoIaImposible : boolean = false;
  iaRegistro : number[] = [];

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

      if (this.turno === false && this.estadoIaFacil) {
        this.iaFacil();
      } else if (this.turno === false && this.estadoIaImposible) {
        this.iaImposible();
      }

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

  detectarEspaciosVacios(){
    //let i = 0; i < this.urls.length; i++
    for (let i = 0; i < this.urls.length; i++) {
      if (this.urls[i] === "") {
        this.iaRegistro.push(i);
      }
    }
  }

  iaFacil(){
    this.detectarEspaciosVacios();
    let rand = Math.floor(Math.random() * this.iaRegistro.length);
    this.ponerMarca(this.iaRegistro[rand]);
    this.iaRegistro = [];
  }

  iaImposible(){
    if (this.IaVerificarIguales(0,1) || this.IaVerificarIguales(0,2) || this.IaVerificarIguales(1,2)) {
      this.IaBuscarParaTapar(1, 0);
    } else if(this.IaVerificarIguales(3,4) || this.IaVerificarIguales(3,5) || this.IaVerificarIguales(4,5)){
      this.IaBuscarParaTapar(1, 3);
    }else if(this.IaVerificarIguales(6,7) || this.IaVerificarIguales(6,8) || this.IaVerificarIguales(7,8)){
      this.IaBuscarParaTapar(1, 6);
    }else if(this.IaVerificarIguales(0,3) || this.IaVerificarIguales(0,6) || this.IaVerificarIguales(3,6)){
      this.IaBuscarParaTapar(3, 0);
    }else if(this.IaVerificarIguales(1,4) || this.IaVerificarIguales(1,7) || this.IaVerificarIguales(4,7)){
      this.IaBuscarParaTapar(3, 1);
    }else if(this.IaVerificarIguales(2,5) || this.IaVerificarIguales(2,8) || this.IaVerificarIguales(5,8)){
      this.IaBuscarParaTapar(3, 2);
    }else if(this.IaVerificarIguales(6,4) || this.IaVerificarIguales(6,2) || this.IaVerificarIguales(4,2)){
      this.IaBuscarParaTapar(3, 2);
    }else if(this.IaVerificarIguales(0,4) || this.IaVerificarIguales(0,8) || this.IaVerificarIguales(4,8)){
      this.IaBuscarParaTapar(4, 0);
    }
  }

/*
  iaImposible(){
    if (this.IaVerificarIguales(0,1) || this.IaVerificarIguales(0,2) || this.IaVerificarIguales(1,2) || this.IaVerificarIguales(3,4) || this.IaVerificarIguales(3,5) || this.IaVerificarIguales(4,5) || this.IaVerificarIguales(6,7) || this.IaVerificarIguales(6,8) || this.IaVerificarIguales(7,8)) {
      this.IaBuscarParaTapar(1);
    } else if(this.IaVerificarIguales(0,3) || this.IaVerificarIguales(0,6) || this.IaVerificarIguales(3,6) || this.IaVerificarIguales(1,4) || this.IaVerificarIguales(1,7) || this.IaVerificarIguales(4,7) || this.IaVerificarIguales(2,5) || this.IaVerificarIguales(2,8) || this.IaVerificarIguales(5,8) || this.IaVerificarIguales(6,4) || this.IaVerificarIguales(6,2) || this.IaVerificarIguales(4,2)){
      this.IaBuscarParaTapar(3);
    }else if(this.IaVerificarIguales(0,4) || this.IaVerificarIguales(0,8) || this.IaVerificarIguales(4,8)){
      this.IaBuscarParaTapar(4);
    }
  }
*/
  activarIa(){
    this.estadoIaFacil = true;
    this.o = "IA";
  }

  desactivarIa(){
    this.estadoIaFacil = false;
    this.o = "O";
  }

  activarIaImposible(){
    this.estadoIaImposible = true;
    this.o = "IA";
  }

  desactivarIaImposible(){
    this.estadoIaImposible = false;
    this.o = "O";
  }

  IaBuscarParaTapar(incremento, inicio){
    for (let i = inicio; i < this.urls.length; i += incremento) {
      let cont = 0;
      console.log("inicio");
      console.log(i);
      
     
      if (this.urls[i] === "") {
        console.log("dentro1");
        this.ponerMarca(this.iaRegistro[i]);
        break;
      } else if(this.turno === false){
        console.log("dentro2");
        this.iaFacil();
      }
      
      console.log("vuelta " + cont);
      
      cont ++;
    }
  }

  IaVerificarIguales(num1, num2){
    if (this.urls[num1] === this.urls[num2] && this.urls[num1] !== "") {
      return true;
    }else{
      return false;
    }
  }
}
