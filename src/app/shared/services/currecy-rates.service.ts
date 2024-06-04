import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { currencyRate } from '../consts';
import { currecnyRates } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CurrecyRatesService {
  private readonly http = inject(HttpClient)

  private readonly url = currencyRate;


  getRates(){
    return this.http.get<currecnyRates>(`${this.url}`);
  }
}
