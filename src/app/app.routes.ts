import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {NgModule} from "@angular/core";
import {BoutiquePageComponent} from "./pages/boutique-page/boutique-page.component";

export const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'test/:title', component: BoutiquePageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
