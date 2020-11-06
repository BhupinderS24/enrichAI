import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-box-info',
  templateUrl: './small-box-info.component.html',
  styleUrls: ['./small-box-info.component.css'],
})
export class SmallBoxInfoComponent implements OnInit {
  @Input() box;
  constructor() {}

  ngOnInit(): void {}
}
