import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css']
})
export class Bai1Component implements OnInit {
  student = {
    "photo":"teo.jpg",
    "fullName":"Nguyễn Văn Tèo",
    "birthday":"20-01-1999",
    "gender":"Nam",
    "mark":8.5
  }
  constructor() { }

  ngOnInit() {
  }

}
