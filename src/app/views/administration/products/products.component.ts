import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import { ERPBackendService } from 'src/app/core/backend-client/backend.service';
//import { finalize,take } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:any;

  constructor(private http:HttpClient) { }
  //constructor(private readonly backend: ERPBackendService) { }

  ngOnInit(): void {
    let response = this.http.get("http://localhost:8080/products");
    response.subscribe((data) => this.products=data);
    //this.products = [];
    //this.fetchAllProducts();
  }

  /*public fetchAllProducts(): void {
    const productsList = this.backend.getAllProducts();
    productsList.pipe(
      take(1)).subscribe(products => {
        this.products = products;
      });
  }*/

}
