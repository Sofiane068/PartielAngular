import { Component } from '@angular/core';
import { Statistique } from 'src/models/types';
import { StatistiqueService } from 'src/service/statistique.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'eval';
  tabStats: Statistique[] = this.monService.listStats;

  constructor(public monService: StatistiqueService) {

    setTimeout(() => {
      this.tabStats.push(
        new Statistique(
          'fa1f5f40-me3k-41ob-91ec-7j8745ecfb46',
          'Démographie en Allemagne',
          '50M'
        )
      );
    }, 3000);
  }
}


 
