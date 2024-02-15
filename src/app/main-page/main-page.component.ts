import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {ContentComponent} from "../content/content.component";
import {CategoriesComponent} from "../categories/categories.component";
import {ShowcaseComponent} from "../showcase/showcase.component";
import {ReviewsComponent} from "../reviews/reviews.component";
import {InformationComponent} from "../information/information.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HeaderComponent,
    ContentComponent,
    CategoriesComponent,
    ShowcaseComponent,
    ReviewsComponent,
    InformationComponent,
    FooterComponent
  ],
  template: `
      <!--<app-header class="sticky top-0"/>-->
      <app-header/>
      <app-content/>
      <app-categories/>
      <app-showcase/>
      <app-reviews/>
      <app-information/>
      <app-footer/>
  `
})
export class MainPageComponent {

}
