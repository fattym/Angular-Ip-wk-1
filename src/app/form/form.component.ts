import { Quote } from './../quote';
// tslint:disable-next-line: import-spacing
import { Component, OnInit, Output, EventEmitter } from'@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
newQuote =new Quote(0,"","", new Date());
@Output() addGoal = new EventEmitter<Quote>();
submitQuote(){
  this.addGoal.emit(this.newQuote);
    }
  constructor() { }

  ngOnInit(): void {
  }

}
