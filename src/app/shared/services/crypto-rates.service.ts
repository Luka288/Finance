import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CryptoResponse } from '../interfaces/cryptoInter';
import { CryptoURL } from '../consts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoRatesService {
  private readonly http = inject(HttpClient)
  readonly URL = CryptoURL;
  
  getCrypto(limit: number, offset: number): Observable<CryptoResponse>{
    return this.http.get<CryptoResponse>(`${this.URL}?limit=${limit}&offset=${offset}`)
  }
}
