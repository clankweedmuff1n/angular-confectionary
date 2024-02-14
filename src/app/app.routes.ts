import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {HeaderComponent} from "./header/header.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'test', component: HeaderComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
