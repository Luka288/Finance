import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CryptoRatesService } from '../../shared/services/crypto-rates.service';
import { CryptoResponse } from '../../shared/interfaces/cryptoInter';
import { RouterModule } from '@angular/router';
import { StaticCruptoRequestService } from '../../shared/services/static-crypto-request.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent implements OnInit {
    private readonly cryptoRequest = inject(CryptoRatesService)
    private readonly forMainPage = inject(StaticCruptoRequestService)

    readonly cryptoArray: CryptoResponse[] = [];

    limit: number = 5;
    offset: number = 5;  
    cryptoData: CryptoResponse  | null = null;

ngOnInit(): void {
    this.loadStatic();
}

  loadStatic(){
      return this.forMainPage.loadStatic().subscribe((res) => {
      this.cryptoData = res;
      console.log(this.cryptoData)
  })
  }
  
}


// !! gasketebelia live update !