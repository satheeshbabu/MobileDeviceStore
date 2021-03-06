import { ProductsService } from '../../Services/products-service.service';
import { Product } from '../../Model/product';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-customer-product-details',
  templateUrl: './customer-product-details.component.html',
  styleUrls: ['./customer-product-details.component.css']
})
export class CustomerProductDetailsComponent implements OnInit {
  private product: Product

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductsService) {
  }

  ngOnInit() {
    let productId = this.route.snapshot.paramMap.get('id')
    this.productService.getProducts().then((products: Product[]) => {
      this.product = products.find(product => product.id == +productId)
    })
  }

}
