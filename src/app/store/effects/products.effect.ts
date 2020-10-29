import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map} from 'rxjs/operators';
import { AppDataService } from 'src/app/services/app-data.service';
import { ProductLoad, ProductLoadAction } from '../actions/product.action';
import { IncrementAction, IncrementCounter } from '../actions/counter.action';
import { Product } from 'src/app/models/product.model';

@Injectable()
export class ProductEffects{
    constructor(private service: AppDataService,
        private actions$: Actions){}
    
        @Effect()
        loadProducts$ = this.actions$.pipe(
            ofType(ProductLoadAction),
            switchMap((action:any)=>{
                return this.service.getProducts().pipe(
                    map(res=>{
                        if(res){
                            console.log('the products: '+JSON.stringify(res.data));  
                            console.log('the products length obtained from service call: '+res.per_page);  
                            let pr = res;
                            return new IncrementCounter(pr.per_page);
                        }
                        
                    })
                )
            })
    
        )
}