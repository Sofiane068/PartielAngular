import { Component, OnInit } from '@angular/core';
import { Statistique } from 'src/models/types';
import { StatistiqueService } from 'src/service/statistique.service';

@Component({
  selector: 'app-page-affichage',
  templateUrl: './page-affichage.component.html',
  styleUrls: ['./page-affichage.component.css'],
})
export class PageAffichageComponent implements OnInit {
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

  ngOnInit(): void {}
}
