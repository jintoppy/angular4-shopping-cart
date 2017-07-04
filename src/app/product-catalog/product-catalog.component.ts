import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {
  name: string = ""

  constructor() { }

  ngOnInit() {
  }

}
