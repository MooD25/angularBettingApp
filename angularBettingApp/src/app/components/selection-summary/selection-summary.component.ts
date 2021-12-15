import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selection-summary',
  templateUrl: './selection-summary.component.html',
  styleUrls: ['./selection-summary.component.css']
})
export class SelectionSummaryComponent implements OnInit {
@Input() numSelected:number[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
