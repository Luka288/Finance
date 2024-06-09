import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { currencyExchanges, currencyRate } from '../consts';
import { CurrencyRates, ExchangeRateResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CurrecyRatesService {
  private readonly http = inject(HttpClient)

  private readonly url = currencyRate;

  private readonly exchangeURL = currencyExchanges;


  getRates(event: string){
    return this.http.get<ExchangeRateResponse>(`${this.exchangeURL}/${event}`);
  }
}
