import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-label',
  templateUrl: './my-lib.component.html',
  styles: []
})
export class MyLibComponent implements OnInit {
  @Input() content: string;
  constructor() { }

  ngOnInit() {
  }

}
