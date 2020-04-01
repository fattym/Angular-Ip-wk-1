import { Quote } from './../quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, ' Joseph peter', 'Hata ni gari kwa dereva'),
    new Quote(2, 'Livingstone', 'It all in vain life without Jesus'),
    new Quote(3, 'Kijana wa alua', 'angular si mchezo'),

  ];
 toggleDetails(index){
   this.quotes[index].showDescription=! this.quotes[index].showDescription
 }
  constructor() { }

  ngOnInit(): void {
  }

}
