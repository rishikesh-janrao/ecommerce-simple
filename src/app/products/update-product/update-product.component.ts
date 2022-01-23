import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId = 0;

  productDetails!: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
      ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data['id'];

      this.productsService.viewProduct(this.productId).subscribe(productData => {
        this.productDetails = productData!;
      });

    });
  }

  updateProduct(form:any){
    const updateProduct = {
      categoryId: form.value.categoryId,
      productName: form.value.productName,
      description: form.value.description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      productImg: this.productDetails.productImg,
      isAvailable: form.value.product_available == 1,
      color: form.value.product_color,
      reviews: form.value.product_category,
  };
    console.log(form);
    this.productsService.updateProduct(this.productId, updateProduct).subscribe(data=>{
      console.log(data)
    });

    
  }

}
