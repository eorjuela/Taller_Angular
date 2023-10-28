
import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  constructor(private serieService: SerieService) { }
  series: Array<Serie> = [];
  averageSeasons = 0;

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      series.forEach(serie => {
        this.averageSeasons += serie.seasons
    })
    this.averageSeasons = this.averageSeasons / series.length
    this.averageSeasons = Math.round(this.averageSeasons * 100) / 100
    this.series = series;
  });
  }

  ngOnInit() {
    this.getSeries();
  }

}
