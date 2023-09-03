import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';
import { Rates } from './Rates';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

constructor(private currencyService:CurrencyService){}

  rates:Rates|null=null;
  title = 'currency-converter';

  selectedFromValue:string='USD'
  selectedToValue:string='INR'
  conversionRates: { [currencyCode: string]: number } = {};
  result!:number;

onSelectChange(){  
  this.getValues();  
  
  console.log("SELECTED VALUE IS "+this.conversionRates[this.selectedFromValue]);
 
}


ngOnInit(): void {
  
 
  this.getValues(); 
  console.log("result value is "+this.result);
  
}

getValues(){
  this.currencyService.getRates(this.selectedFromValue).subscribe((data) =>{
    this.rates=data as unknown as Rates;
    this.conversionRates = this.rates.conversion_rates;  
    console.log(this.conversionRates) ;
    this.onSelectChange2(this.selectedToValue);  
    console.log("SELECTED VALUE IS "+this.conversionRates[this.selectedFromValue]);   
  },
  (error) => {
    console.error('Error fetching rates:', error);
  }
);
}

onSelectChange2(key: string | number){  
    console.log(this.conversionRates[key]);
    this.result=this.conversionRates[key];
  }
}




