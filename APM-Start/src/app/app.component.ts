import { Component } from '@angular/core';
import {ProductService} from "./products/product.service";

@Component({
  selector: 'pm-root',
  template:
  `
    <div><h1>{{title}}</h1></div> 
    <pm-products></pm-products>`,
  providers :[ProductService]
})
export class AppComponent {
  title = 'Angular Getting Started';
}
