import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyFetchService {
  private readonly http = inject(HttpClient)


  getInfo(){
    return 
  }
}
