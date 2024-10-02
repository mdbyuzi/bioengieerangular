import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SliderInterface } from '../slider-interface';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from './imageSlider/imageSlider.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NavbarComponent,ImageSliderComponent,FooterComponent],
  template: `
    <p>
      <app-navbar-component></app-navbar-component>
      <image-slider [slides]="slides" ></image-slider>
      <app-footer></app-footer>
      
    </p>
  `,
  styleUrl: './home.component.scss',
  host: {ngSkipHydration: 'true'},
})
export class HomeComponent {

  slides: SliderInterface[] = [
    {url:"/assets/wallpeper/1707970726619.jpg",title:""},
    {url:"/assets/wallpeper/BTEC_Bioreactors.jpg",title:""},
    {url:"/assets/wallpeper/Dreamly_A_striking_image_of_a_fully_automated_filtration_system_490aff72-f9f7-423a-841d-db3d2ee7723e-1.png",title:""},
    {url:"/assets/wallpeper/GMAW.jpg",title:""}

  ]
}
