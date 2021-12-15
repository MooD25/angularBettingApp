import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { SelectNumbers } from '../../interfaces/select-numbers';

@Component({
  selector: 'app-numbers-selection-area',
  templateUrl: './numbers-selection-area.component.html',
  styleUrls: ['./numbers-selection-area.component.css']
})
export class NumbersSelectionAreaComponent implements OnInit {


  
  
  

  constructor() { }

  ngOnInit(): void {
  }

  @Input() button:SelectNumbers={
    id:0,
    num:0,
    isNumberClicked:false
  }

    @Input() numSelected: number[] = [];

  @Output() newNumSelect = new EventEmitter<number>();
  numSelect(){
    const pickedNumber = this.button.num;
    console.log(pickedNumber)
    if (this.button.isNumberClicked === false ) {
      this.button.isNumberClicked = true;
    } else if (this.button.isNumberClicked === true) {
      this.button.isNumberClicked = false;
    }
    this.newNumSelect.emit(pickedNumber);
    console.log('Check output : '+pickedNumber)

  }
 
 
 

  buttons:SelectNumbers[] = [
    {
      id:1,
      num:1,
      isNumberClicked:false
    },{
      id:2,
      num:2,
      isNumberClicked:false
    },{
      id:3,
      num:3,
      isNumberClicked:false
    },{
      id:4,
      num:4,
      isNumberClicked:false
    },{
      id:5,
      num:5,
      isNumberClicked:false
    },{
      id:6,
      num:6,
      isNumberClicked:false
    },{
      id:7,
      num:7,
      isNumberClicked:false
    },{
      id:8,
      num:8,
      isNumberClicked:false
    },{
      id:9,
      num:9,
      isNumberClicked:false
    },{
      id:10,
      num:10,
      isNumberClicked:false
    },{
      id:11,
      num:11,
      isNumberClicked:false
    },{
      id:12,
      num:12,
      isNumberClicked:false
    },{
      id:13,
      num:13,
      isNumberClicked:false
    },{
      id:14,
      num:14,
      isNumberClicked:false
    },{
      id:15,
      num:15,
      isNumberClicked:false
    },{
      id:16,
      num:16,
      isNumberClicked:false
    },{
      id:17,
      num:17,
      isNumberClicked:false
    },{
      id:18,
      num:18,
      isNumberClicked:false
    },{
      id:19,
      num:19,
      isNumberClicked:false
    },{
      id:20,
      num:20,
      isNumberClicked:false
    },
    
  ]

  

}


