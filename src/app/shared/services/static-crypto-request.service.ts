import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CryptoResponse } from '../interfaces/cryptoInter';
import { CryptoURL } from '../consts';

@Injectable({
  providedIn: 'root'
})
export class StaticCruptoRequestService {
  private readonly http = inject(HttpClient);

  readonly URL = CryptoURL;

  loadStatic(){
    return this.http.get<CryptoResponse>(`${this.URL}?limit=100`)
  }

}
