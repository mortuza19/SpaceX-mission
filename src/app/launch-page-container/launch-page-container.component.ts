import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch-page-container',
  templateUrl: './launch-page-container.component.html',
  styleUrls: ['./launch-page-container.component.css']
})
export class LaunchPageContainerComponent implements OnInit {

  constructor() { }

  developerName: string;

  ngOnInit() {
    this.developerName = 'Sahil Mortuza';
  }

}
