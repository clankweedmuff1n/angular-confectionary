import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {ContentComponent} from "../content/content.component";
import {CategoriesComponent} from "../categories/categories.component";
import {ShowcaseComponent} from "../showcase/showcase.component";
import {ReviewsComponent} from "../reviews/reviews.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HeaderComponent,
    ContentComponent,
    CategoriesComponent,
    ShowcaseComponent,
    ReviewsComponent
  ],
  template: `
      <app-header/>
      <app-content/>
      <app-categories/>
      <app-showcase/>
      <app-reviews/>
      <div class="h-[100vh]"></div>
  `
})
export class MainPageComponent {

}
