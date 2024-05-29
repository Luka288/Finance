import { Component, OnInit, inject } from '@angular/core';
import { CryptoRatesService } from '../../shared/services/crypto-rates.service';
import { RouterModule } from '@angular/router';
import { CryptoResponse } from '../../shared/interfaces/cryptoInter';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crypto-page',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './crypto-page.component.html',
  styleUrl: './crypto-page.component.scss'
})
export default class CryptoPageComponent implements OnInit{
  private readonly request = inject(CryptoRatesService)

  crypto: CryptoResponse[] = [];
  limit: number = 15;
  offset: number = 0;  

  ngOnInit(): void {
    this.loadCrypto();
  }

  loadCrypto(){
    this.request.getCrypto(this.limit, this.offset).subscribe((res) => {
      this.crypto.push(res)
      // this.crypto = this.crypto.concat(res);
      this.offset += this.limit;
      console.log(this.crypto)
    })
  }

  loadMore(){
    this.loadCrypto();
  }

  loadLess(){

  }
}
