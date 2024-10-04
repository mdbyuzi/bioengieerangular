import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SliderInterface } from '../slider-interface';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from './imageSlider/imageSlider.component';
import { FooterComponent } from '../footer/footer.component';
import { DragSliderComponent } from '../drag-slider/drag-slider.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NavbarComponent,ImageSliderComponent,FooterComponent,DragSliderComponent],
  template: `
    <p>
      <app-navbar-component></app-navbar-component>
      <image-slider [slides]="slides" ></image-slider>
      <app-footer></app-footer>
      <app-drag-slider></app-drag-slider>
    </p>
  `,
  styleUrl: './home.component.scss',
  host: {ngSkipHydration: 'true'},
})
export class HomeComponent {

  slides: SliderInterface[] = [
    {id:"1",url:"assets/wallpeper/1707970726619.jpg",title:""},
    {id:"2",url:"assets/wallpeper/BTEC_Bioreactors.jpg",title:""},
    {id:"3",url:"assets/wallpeper/Dreamly_A_striking_image_of_a_fully_automated_filtration_system_490aff72-f9f7-423a-841d-db3d2ee7723e-1.png",title:""},
    {id:"4",url:"assets/wallpeper/GMAW.jpg",title:""}

  ]
}
