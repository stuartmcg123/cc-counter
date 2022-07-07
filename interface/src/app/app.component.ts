import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  days!: number;
  hours!: number;
  minutes!: number;
  seconds!: number;

  targetTime: Date = new Date(2022, 7, 14, 9);

  ngOnInit() {
    timer(500, 500)
      .subscribe(c => this.calculate());
  }

  calculate() {
    let now = new Date().getTime();
    let timeUntil = this.targetTime.getTime() - now;

    this.days = Math.floor(timeUntil / 864e5);
    this.hours = Math.floor(timeUntil % 864e5 / 36e5);
    this.minutes = Math.floor(timeUntil % 36e5 / 6e4);
    this.seconds = Math.floor(timeUntil % 6e4 / 1e3);
  }
}
