import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai3',
  templateUrl: './bai3.component.html',
  styleUrls: ['./bai3.component.css']
})
export class Bai3Component implements OnInit {
  card = [
    {
      "ID":"pd100",
      "Img":"laptop.jpg",
      "Name":"Laptop",
      "Price":30000,
      "Quality":1
    },
    {
      "ID":"pd101",
      "Img":"mobile.jpg",
      "Name":"Mobile",
      "Price":54000,
      "Quality":1
    },
    {
      "ID":"pd102",
      "Img":"tv.jpg",
      "Name":"Television",
      "Price":22000,
      "Quality":1
    },
    {
      "ID":"pd103",
      "Img":"headphone.jpg",
      "Name":"Headphone",
      "Price":1300,
      "Quality":1
    }
  ]
  Tang = this.card[1].Quality;
  constructor() { }

  ngOnInit() {
  }
  Up (id) {
    for (let i = 0; i < this.card.length; i++) {
      if(this.card[i].ID === id) {
        this.card[i].Quality++;
      }
    }
  }
  Down (id) {
    for (let i = 0; i < this.card.length; i++) {
      if(this.card[i].ID === id) {
        if(this.card[i].Quality > 1) {
          this.card[i].Quality--;
        }
      }
    }
  }
  Total ()
  {
    let s=0;
    for (let i = 0; i < this.card.length; i++)
    {
      s=s+this.card[i].Price*this.card[i].Quality;
    }
    return s;
  }
}
