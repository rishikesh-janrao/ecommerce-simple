import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {

  productList!: any;
  activeColor:String = "";
  constructor(private productsService: ProductsService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(data=> {
      this.productList = data;
      this.activeColor = this.productList[0].color[0];
    });
  }

  changeColor(color:String){
    this.activeColor = color;
  }

  deleteProduct(product:Product){
      this.productsService.deleteProduct(product.id).subscribe(deleteddata=>{
        this.ngOnInit();
      })
  }


}
