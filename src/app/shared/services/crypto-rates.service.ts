import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CryptoResponse, crypto } from '../interfaces/cryptoInter';

@Injectable({
  providedIn: 'root'
})
export class CryptoRatesService {
  private readonly http = inject(HttpClient)
  

  getCrypto(){
    return this.http.get<CryptoResponse>('https://api.coincap.io/v2/assets')
  }
}
