import { Component, OnInit, inject } from '@angular/core';
import { CryptoRatesService } from '../../shared/services/crypto-rates.service';
import { RouterModule } from '@angular/router';
import { CryptoResponse } from '../../shared/interfaces/cryptoInter';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-crypto-page',
  standalone: true,
  imports: [RouterModule, CommonModule, MatPaginatorModule],
  templateUrl: './crypto-page.component.html',
  styleUrl: './crypto-page.component.scss'
})
export default class CryptoPageComponent implements OnInit{
  private readonly request = inject(CryptoRatesService)

  crypto: CryptoResponse[] = [];

  ngOnInit(): void {
    this.loadCrypto();
  }

  loadCrypto(){
    this.request.getCrypto().subscribe((res) => {
      this.crypto.push(res)
      console.log(this.crypto)
    })
  }
}
