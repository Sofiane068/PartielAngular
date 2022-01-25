import { Component } from '@angular/core';
import { Statistique } from 'src/models/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'eval';
  listStats: Statistique[] = [
    new Statistique(
      'fa1f5f40-be3b-11eb-91ec-7f5875ecfb46',
      'Démographie en France',
      '60M'
    ),
    new Statistique(
      'fa1f5f40-me3k-41ob-91ec-7j8745ecfb46',
      'Démographie en Chine',
      '200M'
    ),]

 constructor(){
setTimeout(() => {
  this.listStats.push(
    new Statistique(
      'fa1f5f40-me3k-41ob-91ec-7j8745ecfb46',
      'Démographie en Allemagne',
      '50M'
    )
  );
}, 3000);

 ;
 }
   

}


 
