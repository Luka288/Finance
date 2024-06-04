import { Component, OnInit, inject } from '@angular/core';
import { CurrencyFetchService } from '../../shared/services/currency-fetch.service';
import { RouterModule } from '@angular/router';
import { CurrecyRatesService } from '../../shared/services/currecy-rates.service';

@Component({
  selector: 'app-currency-change',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './currency-change.component.html',
  styleUrl: './currency-change.component.scss'
})
export default class CurrencyChangeComponent implements OnInit {
  private readonly request = inject(CurrencyFetchService)
  private readonly rates = inject(CurrecyRatesService)

  ngOnInit(): void {
    this.loadRates()
  }

  getInfo(){
    this.request.getInfo().subscribe((res) => {
      console.log(res)
    })
  }


  loadRates(){
    this.rates.getRates().subscribe((res) => {
      console.log(res)
    })
  }


}
