import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {animate, style, transition, trigger} from "@angular/animations";
import {NgxSplideModule} from "ngx-splide";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    NgForOf,
    NgxSplideModule,
  ],
  animations: [
    trigger('fadeInFromLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('1000ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ]),
    trigger('fadeInFromTop', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('1000ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('fadeInFromRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('1000ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ],
  template: `
    <section class="w-full overflow-hidden">
      <div class="flex flex-col gap-7 md:flex-row pb-6 md:pb-0">
        <img class="shadow-3xl md:shadow-none flex-1 w-full h-full" [src]="images[0]" @fadeInFromLeft alt="Content image">
        <!--<img [src]="images[1]" @fadeInFromTop alt="Content image">-->
        <splide containerClass="flex-1 shadow-3xl md:shadow-none" class="flex-1" [options]="{arrows: false, autoplay: true, interval: 1000, type: 'loop', perPage: 1, keyboard: false }">
          <splide-slide *ngFor="let image of images">
            <img class="shadow-3xl md:shadow-none w-full h-full" [src]="image" @fadeInFromTop alt="Content image">
          </splide-slide>
        </splide>
        <img class="shadow-3xl md:shadow-none flex-1 w-full h-full" [src]="images[1]" @fadeInFromRight alt="Content image">
        <!--<ng-container *ngFor="let image of images">
            <img [src]="image" alt="Content image">
        </ng-container>-->
      </div>
    </section>
  `
})
export class ContentComponent {
  readonly images = [
    "https://lacannelledemartini.com/wp-content/uploads/2022/02/PORTADA-LCM-1.png",
    "https://lacannelledemartini.com/wp-content/uploads/2022/02/PORTADA-LCM2-1.png"
  ];
}
