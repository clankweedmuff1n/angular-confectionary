import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";

interface ChessElement {
  id: number,
  title: string,
  caption: string,
  button: string,
  link: string,
  image: string,
}

@Component({
  selector: 'app-chess',
  standalone: true,
  imports: [
    NgForOf
  ],
  template: `
    <section class="flex flex-col w-full">
      <ng-container *ngFor="let element of elements; index as i">
        <div
          class="flex w-full max-w-6xl m-auto flex-col md:flex-row"
          [class]="i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'">

          <div class="w-full relative before:block before:pt-[100%]">
            <div class="absolute inset-0 flex flex-col">
              <img class="object-cover w-full h-full" [alt]="element.title" [src]="element.image"/>
            </div>
          </div>

          <div class="bg-pink-50 w-full relative before:block before:pt-[100%]">
            <div class="px-16 absolute inset-0 flex flex-col items-center justify-center ">
              <h3 class="mb-6">꧁༺{{ element.title }}༻꧂</h3>
              <p class="text-center mb-4">{{ element.caption }}</p>
              <button class="hover:after:inset-0 after:-z-10 after:bg-pink-300 after:bg-opacity-60 after:w-full after:h-full after:absolute after:top-2.5 after:left-2.5 after:transition-all px-5 py-3.5 outline-0 border border-black cursor-pointer relative select-none z-10">
                {{ element.button }}
              </button>
            </div>
          </div>


        </div>
      </ng-container>
    </section>
  `,
})
export class ChessComponent {
  readonly elements: ChessElement[] = [
    {
      id: 0,
      title: 'Торты муссовые',
      caption: 'Сладкие подарки под любой повод. Персонализированный диайн',
      button: 'Перейти в каталог',
      link: 'Перейти в каталог',
      image: 'https://i.imgur.com/PkgSYB3.png'
    },
    {
      id: 1,
      title: 'Торты бисквитные',
      caption: 'Широкий выбор наборов со свежими ягодами в бельгийском шоколаде',
      button: 'Перейти в каталог',
      link: 'Перейти в каталог',
      image: 'https://i.imgur.com/PkgSYB3.png'
    },
    {
      id: 2,
      title: 'Макарон',
      caption: 'Эксклюзивный подарок, сочетающий в себе клубнику в шоколаде и цветы',
      button: 'Перейти в каталог',
      link: 'Перейти в каталог',
      image: 'https://i.imgur.com/PkgSYB3.png'
    },
    {
      id: 3,
      title: 'Дессерты',
      caption: 'Капкейки, трайфлы, эскимо, "картошка", муссовые пирожные',
      button: 'Перейти в каталог',
      link: 'Перейти в каталог',
      image: 'https://static.wixstatic.com/media/4167b5_83e6beb4cd5c4db4847fa93996259047~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01/4167b5_83e6beb4cd5c4db4847fa93996259047~mv2.jpg'
    },
    {
      id: 4,
      title: 'Свадебные торты',
      caption: 'Красочные букеты из свежей и ароматной клубники в бельгийском шоколаде',
      button: 'Перейти в каталог',
      link: 'Перейти в каталог',
      image: 'https://static.wixstatic.com/media/4167b5_b94af8c404d34fb488e05d6c1a18cb67~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01/4167b5_b94af8c404d34fb488e05d6c1a18cb67~mv2.jpg'
    },
    {
      id: 5,
      title: 'Детские торты',
      caption: 'Красочные букеты из свежей и ароматной клубники в бельгийском шоколаде',
      button: 'Перейти в каталог',
      link: 'Перейти в каталог',
      image: 'https://static.wixstatic.com/media/4167b5_b94af8c404d34fb488e05d6c1a18cb67~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01/4167b5_b94af8c404d34fb488e05d6c1a18cb67~mv2.jpg'
    },
    {
      id: 6,
      title: 'Для него',
      caption: 'Красочные букеты из свежей и ароматной клубники в бельгийском шоколаде',
      button: 'Перейти в каталог',
      link: 'Перейти в каталог',
      image: 'https://static.wixstatic.com/media/4167b5_b94af8c404d34fb488e05d6c1a18cb67~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01/4167b5_b94af8c404d34fb488e05d6c1a18cb67~mv2.jpg'
    },
    {
      id: 7,
      title: 'Для неё',
      caption: 'Красочные букеты из свежей и ароматной клубники в бельгийском шоколаде',
      button: 'Перейти в каталог',
      link: 'Перейти в каталог',
      image: 'https://static.wixstatic.com/media/4167b5_b94af8c404d34fb488e05d6c1a18cb67~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01/4167b5_b94af8c404d34fb488e05d6c1a18cb67~mv2.jpg'
    },
    {
      id: 8,
      title: 'Бенто cakes',
      caption: 'Красочные букеты из свежей и ароматной клубники в бельгийском шоколаде',
      button: 'Перейти в каталог',
      link: 'Перейти в каталог',
      image: 'https://static.wixstatic.com/media/4167b5_b94af8c404d34fb488e05d6c1a18cb67~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01/4167b5_b94af8c404d34fb488e05d6c1a18cb67~mv2.jpg'
    },
    {
      id: 9,
      title: 'Начинки муссовые',
      caption: 'Красочные букеты из свежей и ароматной клубники в бельгийском шоколаде',
      button: 'Перейти в каталог',
      link: 'Перейти в каталог',
      image: 'https://static.wixstatic.com/media/4167b5_b94af8c404d34fb488e05d6c1a18cb67~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01/4167b5_b94af8c404d34fb488e05d6c1a18cb67~mv2.jpg'
    },
    {
      id: 10,
      title: 'Начинки бисквит',
      caption: 'Красочные букеты из свежей и ароматной клубники в бельгийском шоколаде',
      button: 'Перейти в каталог',
      link: 'Перейти в каталог',
      image: 'https://static.wixstatic.com/media/4167b5_b94af8c404d34fb488e05d6c1a18cb67~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01/4167b5_b94af8c404d34fb488e05d6c1a18cb67~mv2.jpg'
    }
  ]
}
