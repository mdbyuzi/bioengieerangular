import { Component, Input } from "@angular/core";
import { SliderInterface } from "../../slider-interface";
import { CommonModule } from "@angular/common";
import { MatIcon } from "@angular/material/icon";

@Component({
    selector: 'image-slider',
    templateUrl: './imageSlider.component.html',
    styleUrls: ['./imageSlider.component.scss'],
    standalone: true,
    imports: [CommonModule,MatIcon],
})
export class ImageSliderComponent {
    @Input() slides: SliderInterface[] = [];
    currentIndex: number = 0;
    
    getCurrentSliderUrl(): string {
        return `url(${this.slides[this.currentIndex].url})`
    };
    
    goToNext():void{
        const isLastSlide = this.currentIndex === this.slides.length -1;
        const newIndex = isLastSlide?0:this.currentIndex + 1
        this.currentIndex = newIndex
    }
    goToPrevious():void{
        const isFirstSlide = this.currentIndex === 0;
        const newIndex = isFirstSlide ? this.slides.length -1 : this.currentIndex -1;
        this.currentIndex = newIndex
        console.log("helloworld");
        
    }
    goToSlides(value:number):void{

        this.currentIndex=value;
    }
    getBackgrounddots():string{
        
        return "red";
        
    }
}