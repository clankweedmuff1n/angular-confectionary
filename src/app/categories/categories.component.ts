import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    NgForOf
  ],
  template: `
      <section class="flex flex-col m-auto justify-center w-full">
          <h1 class="mx-9 md:mx-56 py-12 text-center">HACEMOS REPOSTERÍA ARTESANAL Y CREATIVA</h1>
          <div class="flex md:max-w-[1680px] flex-col md:flex-row pt-6 md:pt-16 mx-9 md:m-auto md:gap-48 pb-8 md:justify-between">
              <ng-container *ngFor="let category of categoriesArray">
                  <div class="flex flex-col justify-center items-center mb-9">
                      <img class="mb-7 w-28 h-28" [src]="category.imageUrl" alt="Category image">
                      <h2 class="md:text-xl">{{category.name}}</h2>
                  </div>
              </ng-container>
          </div>
      </section>
  `
})
export class CategoriesComponent {
  readonly categoriesArray = [
    {
      imageUrl: "https://lacannelledemartini.com/wp-content/uploads/2022/02/vegan@3x.png",
      name: "Vegano"
    },
    {
      imageUrl: "https://lacannelledemartini.com/wp-content/uploads/2022/02/gluten-2@3x.png",
      name: "Sin gluten"
    },
    {
      imageUrl: "https://lacannelledemartini.com/wp-content/uploads/2022/02/sugar@3x.png",
      name: "Sin azúcar"
    },
    {
      imageUrl: "https://lacannelledemartini.com/wp-content/uploads/2022/02/dairy@3x.png",
      name: "Sin lactosa"
    }
  ]
}
