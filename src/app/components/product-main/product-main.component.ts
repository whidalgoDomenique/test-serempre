import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.scss']
})
export class ProductMainComponent implements OnInit {

  productsList = [
    {
      id : 0,
      image : 'assets/images/products/main/productMain.png',
      features : [
        {
          image : 'assets/images/info/touch-customizable/Path.png',
          label : 'Customizable Touch Control'
        },
        {
          image : 'assets/images/info/equalizer/Shape.png',
          label : 'Built-in Equalizer'
        },
        {
          image : 'assets/images/info/noise-cancellation/Combined-shape.png',
          label : 'Active Noise Cancellation'
        }
      ],

    },
    {
      id : 1,
      image : 'assets/images/products/second/big.png',
      features : [
        {
          image : 'assets/images/info/touch-customizable/Path.png',
          label : 'Customizable Touch Control'
        },
        {
          image : 'assets/images/info/noise-cancellation/Combined-shape.png',
          label : 'Active Noise Cancellation'
        }
      ],

    },
    {
      id : 2,
      image : 'assets/images/products/third/third-detail.png',
      features : [
        {
          image : 'assets/images/info/noise-cancellation/Combined-shape.png',
          label : 'Active Noise Cancellation'
        }
      ],

    }
  ]

  selectedProduct;

  constructor() { 
    this.selectedProduct = this.productsList[0];
  }

  ngOnInit(): void {

  }

}
