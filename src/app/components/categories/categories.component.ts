import {Component, OnDestroy} from '@angular/core';
import {NgForOf} from "@angular/common";
import { Category } from '../../models/category';
import {Subscription} from "rxjs";
import {CategoriesService} from "../../services/categories";

@Component({
    selector: 'app-categories',
    standalone: true,
    imports: [
        NgForOf
    ],
    template: `
        <section class="w-full">
            <h1 class="mx-9 md:mx-56 py-12 text-center">HACEMOS REPOSTERÍA ARTESANAL Y CREATIVA</h1>
            <div class="flex flex-col md:flex-row pt-6 md:pt-16 mx-9 md:mx-56 pb-8 md:justify-between">
                <ng-container *ngFor="let category of categoriesArray">
                    <button class="md:w-1/6 group hover:scale-110 transition-all bg-pink-200 p-4 shadow-2xl rounded-2xl flex flex-col justify-center items-center mb-9">
                        <img class="group-hover:scale-110 transition-all mb-7 w-28 md:w-20 md:h-20 h-28"
                             [src]="category.imageUrl" alt="Category image">
                        <h4 class="">{{category.name}}</h4>
                    </button>
                </ng-container>
            </div>
        </section>
    `
})
export class CategoriesComponent {
    readonly categoriesArray = [
        {
            imageUrl: "https://lacannelledemartini.com/wp-content/uploads/2022/02/vegan@3x.png",
            name: "Веганские"
        },
        {
            imageUrl: "https://lacannelledemartini.com/wp-content/uploads/2022/02/gluten-2@3x.png",
            name: "Без глютена"
        },
        {
            imageUrl: "https://lacannelledemartini.com/wp-content/uploads/2022/02/sugar@3x.png",
            name: "Без сахара"
        },
        {
            imageUrl: "https://lacannelledemartini.com/wp-content/uploads/2022/02/dairy@3x.png",
            name: "Без лактозы"
        }
    ]
}
