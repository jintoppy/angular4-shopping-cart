import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  @ViewChild('f') addForm: NgForm;
  answer: string = '';
  model = {};
  constructor() { }

  ngOnInit() {
  }

  // onAdd(form: NgForm){
  //   console.log(form);
  // }

  assignValue(){
    // this.addForm.setValue({
    //   answer: 'Hi',
    //   basicData: {
    //     amount: 1,
    //     name: 'Jinto'
    //   },
    //   country: 'IN'
    // });
    
  
    this.addForm.form.patchValue({
      basicData: {
        amount: 2
      }
    });

  }

  onAdd(){
    console.log(this.addForm.value);
  }
}
