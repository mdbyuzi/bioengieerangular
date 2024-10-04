import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SliderInterface } from '../slider-interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-drag-slider',
  standalone: true,
  imports: [CarouselModule,CommonModule],
  templateUrl: './drag-slider.component.html',
  styleUrl: './drag-slider.component.scss'
})
export class DragSliderComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    animateIn: 'fadeIn',
    navSpeed: 700,
    autoplayTimeout:5000,
    autoplay:true,
    autoplaySpeed: false,
    navText: ['', ''],
    smartSpeed: 800,
    dotsSpeed: 1000,
    dragEndSpeed: 1000,
    
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
    },
    nav: true
  }

  slidesStore:SliderInterface[]=[
    {id:"1",url:"assets/products/image-produc-tcleaning-in-place-systems-450x315-square-b760f3c2ea425721670c1df2e5743079-.jpg",title:"cleaning-in-place-systems"},
    {id:"2",url:"assets/products/image-producChromatography-Column-2-450x315-square-72c0eda2711becb1940d7da1e0002a80-.jpg",title:"Chromatography-Column"},
    {id:"3",url:"assets/products/image-product-bioreactor-450x315-square-ebc3c0848bf45b6859b457797476f31b-.jpg",title:"bioreactor"},
    {id:"4",url:"assets/products/image-product-fermenter-450x315-square-87b6872a32eb891e72c885ab54a907e5-.jpg",title:"product-fermenter"},
    {id:"5",url:"assets/products/image-product-storage-and-process-vessels-450x315-square-d01402d13236b118437c010a0a826a8d-.jpg",title:"storage & process vessels"}
  ]
}
