import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class PriceService {

    public priceFeature = 0;
    public priceWarranty = 0
    constructor() { 

    }

    changePriceWarranty(value:number){
            this.priceWarranty = value  ;
    }
    
    changePriceFeature(value:number){
        this.priceFeature =  value  ;
}
}