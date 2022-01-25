import { Component, OnInit } from '@angular/core';
import { Statistique } from 'src/models/types';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css'],
})
export class StatistiqueComponent implements OnInit {
  statFrance: Statistique;
  statChine: Statistique;

  constructor() {
    this.statFrance = new Statistique(
      'fa1f5f40-be3b-11eb-91ec-7f5875ecfb46',
      'Démographie en France',
      '60M'
    );
    this.statChine = new Statistique(
      'fa1f5f40-me3k-41ob-91ec-7j8745ecfb46',
      'Démographie en Chine',
      '200M'
    );
  }

  ngOnInit(): void {}
}
