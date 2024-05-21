import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyFetchService  {
  private readonly http = inject(HttpClient)

  getInfo(){
    return this.http.get('https://api.businessonline.ge/api/rates/commercial/GEL/USD')
  }
}
