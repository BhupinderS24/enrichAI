import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-box-info',
  templateUrl: './big-box-info.component.html',
  styleUrls: ['./big-box-info.component.css'],
})
export class BigBoxInfoComponent implements OnInit {
  @Input() box;

  constructor() {}

  ngOnInit(): void {}
}
