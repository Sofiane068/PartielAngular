import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageAffichageComponent } from './pages/page-affichage/page-affichage.component';
import { PageCreationComponent } from './pages/page-creation/page-creation.component';

const routes: Routes = [
  { path: 'affichage', component: PageAffichageComponent },
  { path: 'creation', component: PageCreationComponent },
  { path: 'accueil', component: PageAccueilComponent },
  { path: '**', redirectTo: 'accueil' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
