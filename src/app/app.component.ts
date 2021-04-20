import { Component } from '@angular/core';
    
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  // words = [
  //   {text: "Get a Device"},
  //   {text: "Home Internet"},
  //   {text: "Mobile Internet"},
  //   {text: "Add a phone-line"},
  //   {text: "Upgrade"}
  // ];
  slides = [
    {img: "https://via.placeholder.com/600.png/09f/fff",text : "Get a Device"},
    {img: "https://via.placeholder.com/600.png/021/fff",text: "Home Internet"},
    {img: "https://via.placeholder.com/600.png/321/fff",text: "Mobile Internet"},
    {img: "https://via.placeholder.com/600.png/422/fff",text: "Add a phone-line"},
    {img: "https://via.placeholder.com/600.png/654/fff",text: "Upgrade"}
  ];
 
  slideConfig = {"slidesToShow": 3, "slidesToScroll": 1};
  
  // addSlide() {
  //   this.slides.push({img: "http://placehold.it/350x150/777777"})
  // }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
 

  constructor() { }

  ngOnInit(): void { }
  
}