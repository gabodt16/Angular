import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'morph-avatar',
  templateUrl: './morph-avatar.component.html',
  styleUrls: ['./morph-avatar.component.css']
})
export class MorphAvatarComponent implements OnInit {

  @Input() avatars : string[] = [];
  index : number = 0;
  @Output() outputString = new EventEmitter();
  constructor() { }

  ngOnInit() {
    setInterval( ()=>{
      console.log('Hola');
      if(this.index+1 === this.avatars.length){
        this.outputString.emit( 'Ya he terminado la ruleta de avatares' );
      }
      this.index = (this.index+1)%this.avatars.length;
    } , 5000);
  }

}
