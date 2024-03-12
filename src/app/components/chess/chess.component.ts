import {Component, OnDestroy} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Category} from "../../models/category";
import {Subscription} from "rxjs";
import {CategoriesService} from "../../services/categories";
import {Router} from "@angular/router";

@Component({
    selector: 'app-chess',
    standalone: true,
    imports: [
        NgForOf
    ],
    template: `
        <section class="flex flex-col w-full">
            <ng-container *ngFor="let category of categories; index as i">
                <div
                        class="flex w-full max-w-6xl m-auto flex-col md:flex-row"
                        [class]="i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'">

                    <div class="w-full relative before:block before:pt-[100%]">
                        <div class="absolute inset-0 flex flex-col">
                            <img class="object-cover w-full h-full" [alt]="category.name"
                                 [src]="category.preview.image"/>
                        </div>
                    </div>

                    <div class="bg-pink-50 w-full relative before:block before:pt-[100%]">
                        <div class="px-16 absolute inset-0 flex flex-col items-center justify-center ">
                            <h3 class="mb-6">꧁༺{{ category.name }}༻꧂</h3>
                            <p class="text-center mb-4">{{ category.description }}</p>
                            <button (click)="this.router.navigate(['test', category.link])" class="hover:after:inset-0 after:-z-10 after:bg-pink-300 after:bg-opacity-60 after:w-full after:h-full after:absolute after:top-2.5 after:left-2.5 after:transition-all px-5 py-3.5 outline-0 border border-black cursor-pointer relative select-none z-10">
                                {{ category.button_text }}
                            </button>
                        </div>
                    </div>

                </div>
            </ng-container>
        </section>
    `,
})
export class ChessComponent implements OnDestroy {
    categories: Category[] = [];
    categoriesSubscription: Subscription;

    constructor(private categoriesService: CategoriesService, public router: Router) {
        this.categoriesSubscription = this.categoriesService.getAllCategories()
            .subscribe(categories => this.categories = categories);
    }

    ngOnDestroy(): void {
        if (this.categoriesSubscription) {
            this.categoriesSubscription.unsubscribe();
        }
    }
}
