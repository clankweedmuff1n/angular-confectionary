import {Component, HostListener, ElementRef} from '@angular/core';
import {NzButtonComponent} from "ng-zorro-antd/button";
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {NzDropDownDirective, NzDropdownMenuComponent} from "ng-zorro-antd/dropdown";
import {NzMenuDirective, NzMenuDividerDirective, NzMenuItemComponent, NzSubMenuComponent} from "ng-zorro-antd/menu";
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {RouterLink} from "@angular/router";
import {map} from 'rxjs/operators';

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
    RouterLink,
    NgClass,
    NgStyle
  ],
  template:
    `
        <div *ngIf="isHeaderFixed"
             [ngClass]="isHeaderFixed ? 'block sticky top-0' : 'hidden'"
             [ngStyle]="{'height': headerHeight}">
        </div>
        <header class="transition-all duration-500 w-full sticky top-0 z-50  bg-white py-10"
                [ngClass]="isHeaderFixed ? '!fixed shadow-2xl' : ''"
                (scroll)="onScroll()">

        <!--<header class="w-full z-50 bg-white py-10">-->
            <div class="w-4/5 m-auto flex flex-col">
                <div
                        class="transition-all w-[100px] h-[100px] m-auto static">
                    <img [src]="logoSrc" alt="Logo">
                </div>
                <div class="md:max-w-[1080px] w-full flex md:m-auto mt-5 justify-around">

                    <button nz-dropdown nzTrigger="click" [nzDropdownMenu]="dropdownMenu"
                            class="md:hidden bg-menu-beige rounded-md flex justify-between w-full items-center py-1.5 px-2.5">
                        <p class="text-menu-brown font-bold">Seleccionar página</p>
                        <svg class="text-menu-green" xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
                             viewBox="0 0 24 24">
                            <path fill="currentColor" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"/>
                        </svg>
                    </button>

                    <ng-container *ngFor="let button of buttons">
                        <button class="max-md:hidden py-1.5 px-2.5">
                            <p class="text-menu-brown font-bold">{{button.name}}</p>
                        </button>
                    </ng-container>

                    <nz-dropdown-menu #dropdownMenu="nzDropdownMenu">
                        <ul class="uppercase p-3.5 border-t-4 border-menu-green rounded-none mt-5" nz-menu>
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
export class HeaderComponent {
  isHeaderFixed: boolean = false;
  headerHeight: string = "";

  @HostListener('window:scroll', ['$event']) onScroll() {
    this.isHeaderFixed = window.scrollY > 0;
  }

  constructor(private elementRef: ElementRef, private breakpointObserver: BreakpointObserver) {
  }

  isPhoneScreen() {
    return this.breakpointObserver.observe([Breakpoints.Handset])
      .pipe(map(result => result.matches));
  }

  ngAfterViewInit() {
    this.headerHeight = this.elementRef.nativeElement.offsetHeight + "px";
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
