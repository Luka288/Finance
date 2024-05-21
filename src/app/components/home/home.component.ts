import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CryptoRatesService } from '../../shared/services/crypto-rates.service';
import { CryptoResponse } from '../../shared/interfaces/cryptoInter';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent implements OnInit {
    private readonly cryptoRequest = inject(CryptoRatesService)

    readonly cryptoArray: CryptoResponse[] = [];

    cryptoData: CryptoResponse  | null = null;

ngOnInit(): void {
  this.getCrypto();
}

    getCrypto(){
      return this.cryptoRequest.getCrypto().subscribe((res) => {
        this.cryptoData = res;
        console.log(this.cryptoData)
      })
    }
}