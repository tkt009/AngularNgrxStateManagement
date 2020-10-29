import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  inputName: string='';
  name:string;
  counter: number = 0;
  ngOnInit() {
  }

  saveName(){
    this.name = this.inputName;
    this.inputName = null;
    
  }
  
  clearName(){
    this.name = null;
    this.inputName = null;
  }

  increment(){
    this.counter =  this.counter+1;
  }

  decrement(){
    this.counter =  this.counter-1;
  }

}
