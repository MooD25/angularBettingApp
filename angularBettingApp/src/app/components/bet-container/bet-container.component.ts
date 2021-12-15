import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BetNumbers } from '../../interfaces/bet-numbers';

@Component({
  selector: 'app-bet-container',
  templateUrl: './bet-container.component.html',
  styleUrls: ['./bet-container.component.css']
})
export class BetContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() button:BetNumbers={
    id:0,
    value:0
  }
  @Output() newBetValueSelected = new EventEmitter<number>();
  amountSelect(){
    const selectedValue = this.button.value;
    this.newBetValueSelected.emit(selectedValue);
    console.log('Check output : '+selectedValue)

  }

  buttons:BetNumbers[] = [
    {
      id:1,
      value:1
      
    },{
      id:2,
      value:5
    
    },{
      id:3,
      value:10
      
    },{
      id:4,
      value:20
     
    }
  ]
}
  

