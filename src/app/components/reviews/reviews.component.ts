import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {NgxSplideModule} from "ngx-splide";

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [
    NgForOf,
    NgxSplideModule
  ],
  template: `
    <section class="w-full max-w-[1500px] m-auto">
      <div class="md:px-10">
        <splide [options]="{ breakpoints: {
            '768': {perPage: 1}
        }, type: 'loop', perPage: 4, keyboard: false }">
          <splide-slide *ngFor="let review of reviewArray">
            <div class="bg-white p-4 my-10 rounded-md shadow-3xl mx-8 md:mx-4 flex flex-col">
              <div class="flex">
                <img class="mr-2.5 w-12 h-12 rounded-full" [src]="review.avatarUrl" alt="Swiper slide image">
                <div class="flex flex-col justify-around">
                  <h5>{{ review.name }}</h5>
                  <h6>{{ review.date.toISOString().split('T')[0] }}</h6>
                </div>
              </div>
              <div class="flex gap-2 py-2">
                <svg class="text-yellow-400 w-6 h-6" *ngFor="let item of [].constructor(review.review)" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg class="text-gray-500 w-6 h-6" *ngFor="let item of [].constructor(5 - review.review)" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"/></svg>
              </div>
              <div class="h-[100px] overflow-x-hidden overflow-y-scroll">
                <p>{{ review.text }}</p>
              </div>
            </div>
          </splide-slide>
        </splide>
        <!--<swiper [loop]="true" [autoHeight]="true" [allowTouchMove]="false"
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
        </swiper>-->
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
      name: "Имя",
      review: 5,
      text: "Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв ",
    },
    {
      id: 1,
      avatarUrl: "https://lacannelledemartini.com/wp-content/plugins/widget-google-reviews/assets/img/guest.png",
      date: this.currentDate,
      name: "Имя",
      review: 1,
      text: "Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв ",
    },
    {
      id: 1,
      avatarUrl: "https://lacannelledemartini.com/wp-content/plugins/widget-google-reviews/assets/img/guest.png",
      date: this.currentDate,
      name: "Имя",
      review: 2,
      text: "Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв ",
    },
    {
      id: 1,
      avatarUrl: "https://lacannelledemartini.com/wp-content/plugins/widget-google-reviews/assets/img/guest.png",
      date: this.currentDate,
      name: "Имя",
      review: 3,
      text: "Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв ",
    },
    {
      id: 1,
      avatarUrl: "https://lacannelledemartini.com/wp-content/plugins/widget-google-reviews/assets/img/guest.png",
      date: this.currentDate,
      name: "Имя",
      review: 4,
      text: "Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв ",
    },
    {
      id: 1,
      avatarUrl: "https://lacannelledemartini.com/wp-content/plugins/widget-google-reviews/assets/img/guest.png",
      date: this.currentDate,
      name: "Имя",
      review: 5,
      text: "Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв ",
    },
    {
      id: 1,
      avatarUrl: "https://lacannelledemartini.com/wp-content/plugins/widget-google-reviews/assets/img/guest.png",
      date: this.currentDate,
      name: "Имя",
      review: 5,
      text: "Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв ",
    },
    {
      id: 1,
      avatarUrl: "https://lacannelledemartini.com/wp-content/plugins/widget-google-reviews/assets/img/guest.png",
      date: this.currentDate,
      name: "Имя",
      review: 2,
      text: "Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв ",
    },
  ]
}
