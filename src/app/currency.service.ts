import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rates } from './Rates';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private httpClient:HttpClient){ }
  url:string='';
  

  getRates(arg:string):Observable<Rates[]>
  {
   this.url= "https://v6.exchangerate-api.com/v6/98dc2000260e7eebc97d519d/latest/"+arg;
return this.httpClient.get<Rates[]>(this.url);
  }

}
