import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title : string = 'Tarjeta de presentación';
  buttonText: string = 'Save';
  isDisabled: boolean = false;
  name: string = '';
  position: string = '';
  previousPositions : string[] = ['Lecturer', 'Lo que sea', 'Programador']; 
  urls = ['https://api.adorable.io/avatars/285/1.png', 'https://api.adorable.io/avatars/285/2.png',
  'https://api.adorable.io/avatars/285/3.png', 'https://api.adorable.io/avatars/285/4.png'];

  saveEvent(){
    if(this.buttonText === 'Save'){
      this.buttonText = 'Edit';
      this.isDisabled = true;
    } else {
      this.buttonText = 'Save';
      this.isDisabled = false;
    }
  }

  showInformation(){
    alert(this.name+' '+this.position);
    this.previousPositions.push( 'skfsdkjfnskj' );
  }

  resetInformation(){
    this.name='';
    this.position='';
  }

  handleChildEvent(event){
    console.log(event);
  }

}
