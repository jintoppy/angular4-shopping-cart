import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  addForm: FormGroup;
  forbiddenNames = ['Jinto'];
  constructor() { }

  ngOnInit() {
    this.addForm = new FormGroup({
      userData: new FormGroup({
        name: new FormControl(null, [Validators.required, this.forbiddenNamesFn.bind(this)]),
        amount: new FormControl(10, [Validators.required, Validators.nullValidator]),
      }),
      country: new FormControl(null),
      hobbies: new FormArray([])
    });

    this.addForm.statusChanges.subscribe((value) => {
      console.log(value);
    })
    this.addForm.valueChanges.subscribe((value) => {
      console.log(value);
    })
  }
  onAdd(){
    console.log(this.addForm);
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.addForm.get('hobbies')).push(control);
  }

  forbiddenNamesFn(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenNames.indexOf(control.value) !== -1){
      return {
        nameIsForbidden: true
      };
    }
    return null;
  }

}
