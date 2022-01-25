import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { PageAffichageComponent } from './pages/page-affichage/page-affichage.component';
import { PageCreationComponent } from './pages/page-creation/page-creation.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    StatistiqueComponent,
    PageAffichageComponent,
    PageCreationComponent,
    PageAccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
