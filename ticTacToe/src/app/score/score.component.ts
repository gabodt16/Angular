import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Input() ptosXH: number;
  @Input() ptosOH: number;
  @Input() ptosVH: number;
  @Input() xH: number;
  @Input() oH: number;
  @Output() outputString = new EventEmitter();



  //this.outputString.emit( 'Ya he terminado la ruleta de avatares' );

  constructor() { }

  ngOnInit() {
    
  }

  abrirPopUp(){
    this.outputString.emit(true);
  }

}
