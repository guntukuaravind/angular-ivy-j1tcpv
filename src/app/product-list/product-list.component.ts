import { Component, OnInit } from '@angular/core';
import { ProductService } from '../-services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:any;
  currentProduct:any;
  currentIndex=-1;
  title='';
  constructor(private proService:ProductService) { }

  ngOnInit(): void {
    this.retrieveProducts();
  }
  retrieveProducts():void{
    this.proService.getAll().subscribe(
      data=>{
        this.products=data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
    
  }
  refreshList(): void {
    this.retrieveProducts();
    this.currentProduct = null;
    this.currentIndex = -1;
  }

  setActiveProduct(book:any, index:any): void {
    this.currentProduct = book;
    this.currentIndex = index;
  }

  removeAllProduct(): void {
    this.proService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveProducts();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.proService.findByTitle(this.title)
      .subscribe(
        data => {
          this.products = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
