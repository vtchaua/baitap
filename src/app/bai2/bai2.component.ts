import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css']
})
export class Bai2Component implements OnInit {
  title = Bai2Component;

  student = [
  {
    fullName : 'Nguyễn Văn Tèo',
    birthday : '20-01-1999',
    gender : 'Nam',
    photo : 'teo.jpg',
    mark : 8.5
  },
  {
    fullName : 'Phan Thị Nở',
    birthday : '20-12-1999',
    gender : 'Nữ',
    photo : 'no.jpg',
    mark : 8.5
  },
  {
    fullName : 'Nguyễn Khá Bảnh',
    birthday : '20-01-1999',
    gender : 'Nam',
    photo : 'banh.jpg',
    mark : 8.5
  }
]
  constructor() { }

  ngOnInit() {
  }

}
