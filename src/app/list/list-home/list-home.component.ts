import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.css']
})
export class ListHomeComponent implements OnInit {

  numbers = [
    { value: 50, label: 'Müşteri' },
    { value: '3500₺', label: 'ciro' },
    { value: 65, label: 'Yorumlar' },
  ];

  images = [
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Şifonyer',
      description: 'Her ütlü eşyanızı koyabileceğiniz şifonyer',
    },
    {
      image: '/assets/images/couch.jpeg',
      title: 'Kanepe',
      description: 'Oturması Muhteşem Koltuk',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
