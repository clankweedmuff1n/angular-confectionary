import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    NgForOf,
  ],
  template: `
      <section class="w-full">
          <div class="flex flex-col gap-7 md:flex-row">
              <ng-container *ngFor="let image of images">
                  <img [src]="image" alt="Content image">
              </ng-container>
          </div>
      </section>
  `
})
export class ContentComponent {
  readonly images = [
    "https://lacannelledemartini.com/wp-content/uploads/2022/02/PORTADA-LCM-1.png",
    "https://lacannelledemartini.com/wp-content/uploads/2022/02/PORTADA-WEB-2.png",
    "https://lacannelledemartini.com/wp-content/uploads/2022/02/PORTADA-LCM2-1.png"
  ];
}
