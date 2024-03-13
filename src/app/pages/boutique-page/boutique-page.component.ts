import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {ActivatedRoute} from "@angular/router";
import {SearchComponent} from "../../components/search/search.component";
import {CatalogueComponent} from "../../components/catalogue/catalogue.component";

@Component({
  selector: 'app-boutique-page',
  standalone: true,
  imports: [
    HeaderComponent,
    SearchComponent,
    CatalogueComponent
  ],
  template: `
    <app-header/>
    <section class="flex w-full">
      <app-search class="w-full md:w-1/5"/>
      <app-catalogue class="w-full md:w-4/5"/>
    </section>
    {{ title }}
  `,
})
export class BoutiquePageComponent implements OnInit {
  title: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.title = params['title'];
    });
  }
}
