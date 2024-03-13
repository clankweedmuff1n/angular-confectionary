import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [
    NgForOf
  ],
  template: `
    <section class="w-full flex flex-col md:flex-row mt-16 md:px-10 items-center">
      <div class="shadow-3xl md:h-fit md:w-full flex flex-col bg-pink-300 mx-10 md:mx-0">
        <div class="p-8 w-3/4 flex  flex-col">
          <h2 class="font-black text-white text-3xl md:text-xl">LoremLorem</h2>
          <h2 class="font-black text-white text-3xl md:text-xl">ipsumsds</h2>
          <h2 class="font-black text-white text-3xl md:text-xl">dolor</h2>
        </div>
        <div class="pt-4 pr-8 pb-8 w-3/4 md:w-1/2 md:text-right flex self-end items-center">
          <p class="font-black text-white md:text-base">
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          </p>
        </div>
      </div>

      <div class="mx-10 my-12 flex flex-col md:flex-row gap-14 md:gap-4 items-center">
        <div class="bg-pink-50 shadow-2xl p-4 rounded-md flex flex-col justify-center">
          <svg class="m-auto text-menu-beige-dark w-24 h-24 pb-8" xmlns="http://www.w3.org/2000/svg" width="6rem" height="6rem" viewBox="0 0 256 256"><g fill="currentColor"><path d="m224 56l-96 88l-96-88Z" opacity=".2"/><path d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-96 85.15L52.57 64h150.86ZM98.71 128L40 181.81V74.19Zm11.84 10.85l12 11.05a8 8 0 0 0 10.82 0l12-11.05l58 53.15H52.57ZM157.29 128L216 74.18v107.64Z"/></g></svg>
          <h2 class="text-xl md:text-base mx-5 md:mx-0 text-center">1. ¡Pídenos lo que quieras a través del formulario, por teléfono o por mail!</h2>
        </div>
        <div class="bg-pink-50 shadow-2xl p-4 rounded-md flex flex-col justify-center">
          <svg class="m-auto text-menu-beige-dark w-24 h-24 pb-8" xmlns="http://www.w3.org/2000/svg" width="6rem" height="6rem" viewBox="0 0 24 24"><path fill="currentColor" d="M5.85 17.1q1.275-.975 2.85-1.537T12 15q1.725 0 3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5q0-1.475 1.013-2.488T12 6q1.475 0 2.488 1.013T15.5 9.5q0 1.475-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q1.325 0 2.5-.387t2.15-1.113q-.975-.725-2.15-1.112T12 17q-1.325 0-2.5.388T7.35 18.5q.975.725 2.15 1.113T12 20m0-9q.65 0 1.075-.425T13.5 9.5q0-.65-.425-1.075T12 8q-.65 0-1.075.425T10.5 9.5q0 .65.425 1.075T12 11m0 7.5"/></svg>
          <h2 class="text-xl md:text-base mx-5 md:mx-0 text-center">2. ¡Marta se pondrá en contacto contigo para aclarar dudas y confirmar el pedido!</h2>
        </div>
        <div class="bg-pink-50 shadow-2xl p-4 rounded-md flex flex-col justify-center">
          <svg class="m-auto text-menu-beige-dark w-24 h-24 pb-8" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20.556q-.235 0-.47-.077q-.234-.077-.432-.25q-1.067-.98-2.163-2.185q-1.097-1.204-1.992-2.493q-.895-1.29-1.467-2.633q-.572-1.343-.572-2.622q0-3.173 2.066-5.234Q9.037 3 12 3t5.03 2.062q2.066 2.061 2.066 5.234q0 1.279-.572 2.613q-.572 1.333-1.458 2.632q-.885 1.3-1.981 2.494q-1.097 1.194-2.164 2.175q-.191.173-.434.26q-.244.086-.487.086m.003-8.825q.668 0 1.14-.476q.472-.475.472-1.143t-.475-1.14q-.476-.472-1.143-.472t-1.14.476q-.472.475-.472 1.143t.475 1.14q.476.472 1.143.472"/></svg>
          <h2 class="text-xl md:text-base mx-5 md:mx-0 text-center">3. ¡Te lo llevamos a casa o también puedes venir a recogerlo cuando esté listo!</h2>
        </div>
      </div>
    </section>
  `
})
export class InformationComponent {
  readonly informationArray = [
    {
      id: 1,
      imageUrl: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.312t.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037"/></svg>'
    }
  ]
}
