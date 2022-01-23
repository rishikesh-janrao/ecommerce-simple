import { Component, OnInit } from '@angular/core';
import { ViewAllProductsComponent } from 'src/app/products/view-all-products/view-all-products.component';
import { ProductsService } from '../../products/products.service';
import { Category } from '../category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categoryList:any;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    // this.productsService.getCategories().subscribe(data => {
    //   this.categoryList = data;
    // });
  }

}
