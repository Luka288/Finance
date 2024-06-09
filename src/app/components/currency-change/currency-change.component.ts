import { Component, OnInit, inject } from '@angular/core';
import { CurrencyFetchService } from '../../shared/services/currency-fetch.service';
import { RouterModule } from '@angular/router';
import { CurrecyRatesService } from '../../shared/services/currecy-rates.service';
import { MatInputModule } from '@angular/material/input';
import { CurrencyRates } from '../../shared/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-currency-change',
  standalone: true,
  imports: [RouterModule, MatInputModule, CommonModule],
  templateUrl: './currency-change.component.html',
  styleUrl: './currency-change.component.scss'
})
export default class CurrencyChangeComponent implements OnInit {
  private readonly request = inject(CurrencyFetchService)
  private readonly rates = inject(CurrecyRatesService)

  currencies: CurrencyRates | null = null;
  baseDisplay: string | null = null;
  base = 'GEL'

  ngOnInit(): void {
    this.loadRates(this.base);
  }


  loadRates(eventOrValue: Event | string) {
    let inputValue: string;
    
    if (typeof eventOrValue === 'string') {
      inputValue = eventOrValue;
    } else {
      const event = eventOrValue as Event;
      inputValue = (event.target as HTMLInputElement)?.value || '';
    }
  
    this.rates.getRates(inputValue).subscribe((res) => {
      this.currencies = res.conversion_rates;
      this.baseDisplay = res.base_code
      console.log(res);
    });
  }
}
