import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styles: [`
    .white-text {
      color: white;
    }
  `]
})
export class DisplayComponent implements OnInit {

  test = Date();
  time = Date();
  buttonClicks = [];
  displayParagraph = true;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.displayParagraph = !this.displayParagraph;
    this.time = new Date();
    this.buttonClicks.push(this.time);
    // this.buttonClicks.push(this.buttonClicks.length + 1);
  }
}