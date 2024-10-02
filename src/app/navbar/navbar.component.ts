import { NgClass } from '@angular/common';
import { Component, Inject, inject, LOCALE_ID } from '@angular/core';
import { MatIconModule } from "@angular/material/icon"
@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [MatIconModule,NgClass],
  template: `
    <div class="nav-container w-full absolute z-[1]" >
      <div class="bg-[#454057]  h-[10px]">
      </div>
        <header>
          <div class="flex">
            <div class="logo">
            <a href="#"><img src="assets/logo/logo.jpg"></a>
            </div>
            <nav class="nav-list">
              <ul>
                <li i18n>Home</li>
                <li ><span i18n>About Us</span> 
                <span>
                  <mat-icon class="icon-size" aria-hidden="false" aria-label="Example home icon" fontIcon="keyboard_arrow_down"></mat-icon>
                </span>
                  <ul>
                    <li>History</li>
                    <li>Mission & vision</li>
                    <li>Achievements</li>
                    <li>Certificates</li>
                    <li>Download Catalog</li>
                  </ul>
                </li>
                <li i18n>Products
                <span>
                  <mat-icon class="icon-size" aria-hidden="false" aria-label="Example home icon" fontIcon="keyboard_arrow_down"></mat-icon>
                </span>
                  <ul>
                    <li>Bioreactor</li>
                    <li>Fermenter</li>
                    <li>Storage Vessels</li>
                    <li>CIP & SIP</li>
                    <li>Fitration Systems</li>
                    <li>Kill Tank</li>
                    <li>Chroma Column</li>
                    <li>Agitator</li>
                    <li>Sampling Valve</li>
                    <li>Flush Button Valve</li>
                  </ul>
                </li>
                <li i18n>Servies
                 <span>
                  <mat-icon class="icon-size" aria-hidden="false" aria-label="Example home icon" fontIcon="keyboard_arrow_down"></mat-icon>
                </span>
                  <ul>
                    <li>Vessel Fabrication</li>
                    <li>Electropolis</li>
                    <li>Piping</li>
                  </ul>
                </li>
                <li i18n>Events</li>
                <li i18n>Career</li>
                <li i18n>Contact Us</li>
              </ul>
            </nav>
          </div>
            <div class="search-box cursor-pointer">
              <span> 
                <mat-icon (click)="SearchOpen()" aria-hidden="false" aria-label="Example home icon" fontIcon="search"></mat-icon>
              </span>
              <div class="search-space" [ngClass]="{'active':ToggleMouse}">
              </div>
              
            </div>
        </header>
    </div>
    
  `,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(@Inject(LOCALE_ID) public locale:string){}

  switchLang(){
    location.href = this.locale === '/fa'? '/en-US' : '/fa' 
  }
  ToggleMouse :boolean = false
  SearchOpen(): void{
    this.ToggleMouse = !this.ToggleMouse;
  }
}
