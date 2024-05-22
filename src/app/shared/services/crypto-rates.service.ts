import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CryptoResponse } from '../interfaces/cryptoInter';
import { CryptoURL } from '../consts';

@Injectable({
  providedIn: 'root'
})
export class CryptoRatesService {
  private readonly http = inject(HttpClient)
  readonly URL = CryptoURL;

  getCrypto(){
    return this.http.get<CryptoResponse>(`${this.URL}?limit=5&page=1`)
  }
}
