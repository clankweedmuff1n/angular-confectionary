import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [
    NgForOf
  ],
  template: `
      <section class="w-full">
          <div class="flex flex-col md:flex-row pt-18 mx-7 pb-8 md:gap-7 md:pt-16">
              <ng-container *ngFor="let showcase of showcaseArray">
                  <img class="mb-7 shadow-3xl" [src]="showcase" alt="Category image">
              </ng-container>
          </div>
      </section>
  `
})
export class ShowcaseComponent {
  readonly showcaseArray = [
    "https://lacannelledemartini.com/wp-content/uploads/2022/03/Mesa-de-trabajo-3.jpg",
    "https://lacannelledemartini.com/wp-content/uploads/2022/03/Mesa-de-trabajo-1.jpg",
    "https://lacannelledemartini.com/wp-content/uploads/2022/03/PASTELES-ALÉRGENOS.png",
    "https://lacannelledemartini.com/wp-content/uploads/2022/03/Mesa-de-trabajo-5.jpg",
    "https://lacannelledemartini.com/wp-content/uploads/2022/02/Mesa-de-trabajo-1-1.png"
  ]
}
