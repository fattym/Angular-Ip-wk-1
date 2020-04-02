import { Quote } from './../quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, ' Joseph peter', 'Hata gari ni gari kwa dereva', new Date(2020,3,12)),
    new Quote(2, 'Livingstone', 'It all in vain life without Jesus',new Date(2020,4,14)),
    new Quote(3, 'Kijana wa alua', 'Angular si mchezo',new Date(2020,5,0)),

  ];
 toggleDetails(index){
   this.quotes[index].showDescription=! this.quotes[index].showDescription
 }
 deleteQuote(isComplete,index){
   if(isComplete){
     let toDelete =confirm( `Are you sure you want to delete ${this.quotes[index].name} quote?`)
     if(toDelete){
       this.quotes.splice(index,1)
     }
   }
 }
  constructor() { }

  ngOnInit(): void {
  }

}
