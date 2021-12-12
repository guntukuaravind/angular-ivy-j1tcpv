import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../-services/product.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  currentProduct:any;
  message='';
  constructor(
    private proService:ProductService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.message='';
    this.getProduct(this.route.snapshot.paramMap.get('id'));
  }
  getProduct(id:any):void{
 this.proService.get(id).subscribe(
   data=>{this.currentProduct=data;
   console.log(data);},
   error => {
    console.log(error);
  });
}

updateProduct(): void {
this.proService.update(this.currentProduct.id, this.currentProduct)
.subscribe(
  response => {
    console.log(response);
    this.message = 'The product was updated successfully!';
  },
  error => {
    console.log(error);
  });
}

deleteProduct(): void {
this.proService.delete(this.currentProduct.id)
.subscribe(
  response => {
    console.log(response);
    this.router.navigate(['/products']);
  },
  error => {
    console.log(error);
  });
}

}
