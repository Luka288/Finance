import { Component, OnInit, inject } from '@angular/core';
import { CurrencyFetchService } from '../../shared/services/currency-fetch.service';
import { RouterModule } from '@angular/router';
import { CurrecyRatesService } from '../../shared/services/currecy-rates.service';
import { MatInputModule } from '@angular/material/input';
import { currecnyRates } from '../../shared/interfaces';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-currency-change',
  standalone: true,
  imports: [RouterModule, MatInputModule],
  templateUrl: './currency-change.component.html',
  styleUrl: './currency-change.component.scss'
})
export default class CurrencyChangeComponent implements OnInit {
  private readonly request = inject(CurrencyFetchService)
  private readonly rates = inject(CurrecyRatesService)

  currency: currecnyRates[] = [];
  

  ngOnInit(): void {
    this.loadRates()
  }


  loadRates(){
    this.rates.getRates().subscribe((res) => {
      console.log(res)
    })
  }
}
