import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {ContentComponent} from "../../components/content/content.component";
import {CategoriesComponent} from "../../components/categories/categories.component";
import {ShowcaseComponent} from "../../components/showcase/showcase.component";
import {ReviewsComponent} from "../../components/reviews/reviews.component";
import {InformationComponent} from "../../components/information/information.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {ChessComponent} from "../../components/chess/chess.component";

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
    FooterComponent,
    ChessComponent
  ],
  template: `
    <app-header/>
    <app-content/>
    <app-categories/>
    <!--<app-showcase/>-->
    <app-chess/>
    <app-reviews/>
    <!--<app-information/>-->
    <app-footer/>
  `
})
export class MainPageComponent {

}
