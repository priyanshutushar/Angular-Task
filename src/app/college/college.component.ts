import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.scss'],
})
export class CollegeComponent implements OnInit {
  name = " ";

  constructor() {}

  ngOnInit(): void {}

  receiveName(event:any){
    this.name = event
  }
}
