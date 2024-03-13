import {AfterViewInit, Component, ElementRef, HostListener} from '@angular/core';
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzDropDownDirective, NzDropdownMenuComponent} from "ng-zorro-antd/dropdown";
import {NzMenuDirective, NzMenuDividerDirective, NzMenuItemComponent, NzSubMenuComponent} from "ng-zorro-antd/menu";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NzButtonComponent,
    NzDropDownDirective,
    NzDropdownMenuComponent,
    NzMenuDirective,
    NzMenuItemComponent,
    NzMenuDividerDirective,
    NzSubMenuComponent,
    NgForOf,
    NgIf,
    RouterLink
  ],
  template:
    `
      <div
        [style]="{'height': headerHeight +'px'}"
        [class]="isHeaderFixed ? 'block' : 'hidden'"></div>
      <header class="z-50 w-full py-5 transition-all duration-1000 top-0 bg-white"
              [class]="isHeaderFixed ? 'fixed shadow-2xl' : 'sticky'">
        <div class="w-4/5 m-auto flex flex-col">
          <div class="flex m-auto">
            <!--<img class="w-[60px] h-[60px]" [src]="logoSrc" alt="Logo">-->
            <h3 class="text-menu-brown mb-2 font-bold">꧁༺Filatova cakes༻꧂</h3>
            <!--<img class="w-[60px] h-[60px]" [src]="logoSrc" alt="Logo">-->
          </div>
          <div class="w-full mt-5">
            <button nz-dropdown nzPlacement="bottomCenter" nzTrigger="click" [nzDropdownMenu]="dropdownMenu"
                    class="bg-menu-beige rounded-md flex justify-between w-full items-center py-1.5 px-2.5">
              <p class="text-menu-brown font-bold">Seleccionar página</p>
              <svg class="text-pink-300" xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
                   viewBox="0 0 24 24">
                <path fill="currentColor" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"/>
              </svg>
            </button>
            <nz-dropdown-menu #dropdownMenu="nzDropdownMenu">
              <ul class="uppercase p-3.5 border-t-4 border-pink-300 rounded-none mt-5" nz-menu>
                <ng-container *ngFor="let button of buttons">
                  <ng-container *ngIf="button.subButtons; else listItem">
                    <ul class="shadow-none" nz-menu nzMode="inline">
                      <li class="hover:!text-menu-brown-light text-menu-brown hover:bg-menu-beige-light"
                          nz-submenu [nzTitle]="button.name">
                        <ul>
                          <li *ngFor="let subButton of button.subButtons"
                              class="pl-6 bg-white hover:!text-menu-brown-light text-menu-brown hover:bg-menu-beige-light px-3 py-2.5"
                              nz-menu-item>
                            <a [routerLink]="['/'].concat(subButton.path.split('/'))">{{ subButton.name }}</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </ng-container>
                  <ng-template #listItem>
                    <li nzMatchRouter
                        class="hover:!text-menu-brown-light text-menu-brown hover:bg-menu-beige-light px-3 py-2.5"
                        nz-menu-item>
                      <a [routerLink]="['/'].concat(button.path.split('/'))">{{ button.name }}</a>
                    </li>
                  </ng-template>
                </ng-container>
              </ul>
            </nz-dropdown-menu>
          </div>
        </div>
      </header>
    `
})
export class HeaderComponent implements AfterViewInit {
  isHeaderFixed: boolean = false;
  headerHeight: number = 0;

  @HostListener('window:scroll', ['$event']) onScroll() {
    this.isHeaderFixed = window.scrollY > 0;
  }

  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit() {
    this.headerHeight = this.elementRef.nativeElement.offsetHeight;
  }

  readonly logoSrc = "https://lacannelledemartini.com/wp-content/uploads/2022/02/icono-la-cannelle.png";
  readonly buttons = [
    {
      name: "First button",
      path: "test",
      subButtons: null,
    },
    {
      name: "Second button",
      path: "Second button path",
      subButtons: null,
    },
    {
      name: "Third button",
      path: "",
      subButtons: [
        {
          name: "First sub button",
          path: "First sub button path",
        },
        {
          name: "Second sub button",
          path: "Second sub button path",
        }
      ],
    }
  ];
}
