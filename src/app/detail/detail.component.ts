import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { parseLazyRoute } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product:any;
  id;
  pageTitle = "";
  listproduct =
[
    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "amount":1,
        "starRating": 3.2,
        "imageUrl": "leaf rake.jpg"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "amount":1,
        "starRating": 4.2,
        "imageUrl": "Garden Cart.jpg"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "amount":1,
        "starRating": 4.8,
        "imageUrl": "Hammer.jpg"
    },
    {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "amount":1,
        "starRating": 3.7,
        "imageUrl": "Saw.jpg"
    },
    {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "amount":1,
        "starRating": 4.6,
        "imageUrl": "VGC.jpg"
    },
];
constructor(private route:ActivatedRoute) { }

ngOnInit() {
  this.route.paramMap.subscribe(para=>{
    this.id=+para.get('productId');
  });
  this.product = this.listproduct.find(a=>a.productId===this.id);
  this.pageTitle=this.product.productName;
}


}
