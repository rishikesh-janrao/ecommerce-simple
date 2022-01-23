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

  productList!:any;
  list!: any;
  activeColor:String = "";
  pages = [1];
  pageLimit:number = 10;
  constructor(private productsService: ProductsService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.productList = [];
    this.pages = [1];
    this.productsService.getAllProducts().subscribe(data=> {
      this.list = data;
      this.activeColor = this.list[0].color[0];
      for(let i=2; i <= Math.ceil(this.list.length/this.pageLimit); i++){
        this.pages.push(i);
      }
      // this.list.forEach((el:Product,index:number) => {
      //   if(index<this.pageLimit){
      //     this.productList.push(el);
      //   }
      // });
      this.handlePagination(1);
    });
  }

  changeColor(color:String){
    this.activeColor = color;
  }
  handlePagination(pageNo:number){
    this.productList = [];
    let num = this.pages.length > 1 ? pageNo : 1;
    switch(num){
      case (num!=-1 && num !=-2)?num:1:
        let j = (this.pageLimit * num) - this.pageLimit +1;
        while(j <= this.pageLimit * num)
        {
          this.list[j] ? this.productList.push(this.list[j]): null; 
          j++;
        }
        break;
      case -1:
        num-1 <= 0 ? null :this.handlePagination(num-1);
        break;
      case -2:
        num+1 <= this.pages[-1] ? this.handlePagination(num+1):null;
        break;
    }
  }

  deleteProduct(product:Product){
      this.productsService.deleteProduct(product.id).subscribe(deleteddata=>{
        this.ngOnInit();
      })
  }


}
