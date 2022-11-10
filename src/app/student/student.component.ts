import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  
  @Output() messageEvent = new EventEmitter<string>();

  student = new FormGroup({
    studentName: new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    this.messageEvent.emit(this.student.value.studentName)
    
  }

}
