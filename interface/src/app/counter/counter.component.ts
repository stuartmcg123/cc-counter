import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() number!: number;
  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }
}
