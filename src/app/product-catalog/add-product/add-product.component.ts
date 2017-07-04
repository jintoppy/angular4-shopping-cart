import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productName: string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    alert('submitted');
    alert(this.productName);
  }

}
