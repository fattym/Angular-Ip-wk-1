import { Quote } from './../quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    {id:1, name:'Joseph peters'},
    {id:2,name:'Livingstone '},
    {id:3,name:'Kijana wa Malua'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
