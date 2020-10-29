import { Component, OnInit } from '@angular/core';
//import { FormsModule } from '@angular/forms'
//import { AppState } from '../state/appState.state';
import { State, Store } from '@ngrx/store';
import * as  NamesActions from '../store/actions/name.action';
import * as CounterActions from '../store/actions/counter.action';
import { Observable } from 'rxjs';
import { NameExtractorPipe} from '../pipes/namePipe.pipe'
import { ApplicationSate } from '../store/reducers';
import { ProductLoad } from '../store/actions/product.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<ApplicationSate>) { }

  inputName: string='';
  name: string='';
  counter:number;
  ngOnInit() {
    this.store.select('theName').subscribe(data=>{
      if(data){
        this.name = data.name;
        if(this.name === 'products'){
          this.store.dispatch(new ProductLoad());
        }
      } 
    })

    this.store.select('theCounter').subscribe(data=>{
      if(data){
        this.counter = data.counter;
      } 
    })
  }

  saveName(){
    this.store.dispatch(new NamesActions.SaveName({name:this.inputName}));
    this.inputName = null;
    // this.store.select('theName').subscribe(data=>{
    //   if(data){
    //     this.name = data.name;
    //     this.inputName = null;
    //   } 
    // })
  }

  clearName(){
    this.store.dispatch(new NamesActions.ClearName());
    // this.store.select('theName').subscribe(data=>{
    //   if(data){
    //     this.name = data.name;        
    //   }
    // })
  }

  increment(){
    this.store.dispatch(new CounterActions.IncrementCounter(1));
    // this.store.select('theCounter').subscribe(data=>{
    //   if(data){
    //     this.counter = data.counter;
    //   }
    // })
  }

  decrement(){
    this.store.dispatch(new CounterActions.DecrementCounter());
    // this.store.select('theCounter').subscribe(data=>{
    //   if(data){
    //     this.counter = data.counter;
    //   }
    // })
  }
}
