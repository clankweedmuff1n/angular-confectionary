import {Component} from '@angular/core';
import {SwiperModule} from "swiper/angular";
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper';
import {NgForOf} from "@angular/common";

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [
    SwiperModule,
    NgForOf
  ],
  template: `
    <section class="w-full max-w-[1500px] m-auto">
      <div class="md:px-10">
        <swiper [loop]="true" [autoHeight]="true" [allowTouchMove]="false"
                [breakpoints]="breakpoints"
                [autoplay]="{ delay: 100000, disableOnInteraction: false }" [pagination]="{ clickable: true }"
                [navigation]="true">
          <ng-container *ngFor="let review of reviewArray">
            <ng-template swiperSlide>
              <div class="p-4 my-10 rounded-md shadow-3xl mx-8 md:mx-7 flex flex-col">
                <div class="flex">
                  <img class="mr-2.5 w-12 h-12 rounded-full" [src]="review.avatarUrl" alt="Swiper slide image">
                  <div class="flex flex-col justify-around">
                    <h3>{{ review.name }}</h3>
                    <h3>{{ review.date.getFullYear() }}</h3>
                  </div>
                </div>
                <div class="py-2.5">{{ review.review }}</div>
                <div class="h-[100px] overflow-x-hidden overflow-y-scroll">
                  <p>{{ review.text }}</p>
                </div>
              </div>
            </ng-template>
          </ng-container>
        </swiper>
      </div>
    </section>
  `
})
export class ReviewsComponent {
  readonly breakpoints = {
    768: { slidesPerView: 4 },
  };

  readonly currentDate = new Date();
  readonly reviewArray = [
    {
      id: 1,
      avatarUrl: "https://lacannelledemartini.com/wp-content/plugins/widget-google-reviews/assets/img/guest.png",
      date: this.currentDate,
      name: "sergio",
      review: 5,
      text: "Para mí los mejores pasteles que he probado nunca. El servicio es de diez. Marta se adapta a tus necesidades y trabaja contigo para conseguir el diseño y sabor que quieras. Cada vez que hay una celebración repito y nunca falla! Es la mejor sin duda.",
    },
    {
      id: 1,
      avatarUrl: "https://lacannelledemartini.com/wp-content/plugins/widget-google-reviews/assets/img/guest.png",
      date: this.currentDate,
      name: "sergio",
      review: 5,
      text: "Para mí los mejores pasteles que he probado nunca. El servicio es de diez. Marta se adapta a tus necesidades y trabaja contigo para conseguir el diseño y sabor que quieras. Cada vez que hay una celebración repito y nunca falla! Es la mejor sin duda.",
    },
    {
      id: 1,
      avatarUrl: "https://lacannelledemartini.com/wp-content/plugins/widget-google-reviews/assets/img/guest.png",
      date: this.currentDate,
      name: "sergio",
      review: 5,
      text: "Para mí los mejores pasteles que he probado nunca. El servicio es de diez. Marta se adapta a tus necesidades y trabaja contigo para conseguir el diseño y sabor que quieras. Cada vez que hay una celebración repito y nunca falla! Es la mejor sin duda.",
    },
    {
      id: 1,
      avatarUrl: "https://lacannelledemartini.com/wp-content/plugins/widget-google-reviews/assets/img/guest.png",
      date: this.currentDate,
      name: "sergio",
      review: 5,
      text: "Para mí los mejores pasteles que he probado nunca. El servicio es de diez. Marta se adapta a tus necesidades y trabaja contigo para conseguir el diseño y sabor que quieras. Cada vez que hay una celebración repito y nunca falla! Es la mejor sin duda.",
    },
    {
      id: 1,
      avatarUrl: "https://lacannelledemartini.com/wp-content/plugins/widget-google-reviews/assets/img/guest.png",
      date: this.currentDate,
      name: "sergio",
      review: 5,
      text: "Para mí los mejores pasteles que he probado nunca. El servicio es de diez. Marta se adapta a tus necesidades y trabaja contigo para conseguir el diseño y sabor que quieras. Cada vez que hay una celebración repito y nunca falla! Es la mejor sin duda.",
    },
    {
      id: 1,
      avatarUrl: "https://lacannelledemartini.com/wp-content/plugins/widget-google-reviews/assets/img/guest.png",
      date: this.currentDate,
      name: "sergio",
      review: 5,
      text: "Para mí los mejores pasteles que he probado nunca. El servicio es de diez. Marta se adapta a tus necesidades y trabaja contigo para conseguir el diseño y sabor que quieras. Cada vez que hay una celebración repito y nunca falla! Es la mejor sin duda.",
    },
    {
      id: 1,
      avatarUrl: "https://lacannelledemartini.com/wp-content/plugins/widget-google-reviews/assets/img/guest.png",
      date: this.currentDate,
      name: "sergio",
      review: 5,
      text: "Para mí los mejores pasteles que he probado nunca. El servicio es de diez. Marta se adapta a tus necesidades y trabaja contigo para conseguir el diseño y sabor que quieras. Cada vez que hay una celebración repito y nunca falla! Es la mejor sin duda.",
    },
    {
      id: 1,
      avatarUrl: "https://lacannelledemartini.com/wp-content/plugins/widget-google-reviews/assets/img/guest.png",
      date: this.currentDate,
      name: "sergio",
      review: 5,
      text: "Para mí los mejores pasteles que he probado nunca. El servicio es de diez. Marta se adapta a tus necesidades y trabaja contigo para conseguir el diseño y sabor que quieras. Cada vez que hay una celebración repito y nunca falla! Es la mejor sin duda.",
    },
  ]
}
