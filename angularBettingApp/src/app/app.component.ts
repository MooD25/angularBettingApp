import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularBettingApp';
  numSelected:number[]=[];
  updateNum(newNumSelect:number){
    if (this.numSelected.find(e=>e==newNumSelect)) {
      const index = this.numSelected.indexOf(newNumSelect) 
      if (index > -1) {
        this.numSelected.splice(index, 1);
        //this.numOfClicked--;
      } 
    } else if (this.numSelected.length < 5) {
        this.numSelected.push(newNumSelect);
       // this.numOfClicked++;
    } 
  
    console.log('Check array : ' +this.numSelected)
  }

  // buttons:SelectNumbers[] = [
  //   {
  //     id:1,
  //     num:1,
  //     isNumberClicked:false
  //   },{
  //     id:2,
  //     num:2,
  //     isNumberClicked:false
  //   },{
  //     id:3,
  //     num:3,
  //     isNumberClicked:false
  //   },{
  //     id:4,
  //     num:4,
  //     isNumberClicked:false
  //   },{
  //     id:5,
  //     num:5,
  //     isNumberClicked:false
  //   },{
  //     id:6,
  //     num:6,
  //     isNumberClicked:false
  //   },{
  //     id:7,
  //     num:7,
  //     isNumberClicked:false
  //   },{
  //     id:8,
  //     num:8,
  //     isNumberClicked:false
  //   },{
  //     id:9,
  //     num:9,
  //     isNumberClicked:false
  //   },{
  //     id:10,
  //     num:10,
  //     isNumberClicked:false
  //   },{
  //     id:11,
  //     num:11,
  //     isNumberClicked:false
  //   },{
  //     id:12,
  //     num:12,
  //     isNumberClicked:false
  //   },{
  //     id:13,
  //     num:13,
  //     isNumberClicked:false
  //   },{
  //     id:14,
  //     num:14,
  //     isNumberClicked:false
  //   },{
  //     id:15,
  //     num:15,
  //     isNumberClicked:false
  //   },{
  //     id:16,
  //     num:16,
  //     isNumberClicked:false
  //   },{
  //     id:17,
  //     num:17,
  //     isNumberClicked:false
  //   },{
  //     id:18,
  //     num:18,
  //     isNumberClicked:false
  //   },{
  //     id:19,
  //     num:19,
  //     isNumberClicked:false
  //   },{
  //     id:20,
  //     num:20,
  //     isNumberClicked:false
  //   },
    
  // ]


}
