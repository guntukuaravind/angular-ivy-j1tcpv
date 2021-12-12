import { Component, OnInit } from '@angular/core';
import { ProductService } from '../-services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product={
    title:'',
    description:'',
    quantity:0.0
  };
  submitted=false;
  constructor(private proService:ProductService) { }

  ngOnInit(): void {
  }
  saveProduct():void{
    const data={
      title:this.product.title,
      description:this.product.description
    };

    this.proService.create(data).subscribe(
      response=>{
        console.log(response);
        this.submitted=true;
      },
      error=>{
        console.log(error);
        
      }
    );
  }

  newProduct():void{
    this.submitted=true;
    this.product={
      title:'',
      description:'',
      quantity:0.0
    };
  }

}
